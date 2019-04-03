const handleError = require('../helpers/handleError')
const xlsConverter = require('../helpers/xlsConverter')
const models = require('../models')
const { isNumeric } = require('validator')

class AdminController {
    // 
    async uploadXlc(req, res, next) {
        const { file } = req
        if (file) {
            const newSheet = await models.sheet.create(file)
            res.json({ type: "success", sheet: newSheet.toJson() })
        } else {
            handleError({ message: "Please try again" }, res)
        }
    }

    async getSheets(req, res, next) {
        try {
            const sheetList = await models.sheet.findAll({
                where: { converted: 0 },
                limit: 100,
                order: [['createdAt', 'DESC']]
            })
            res.json({ type: "success", data: sheetList })
        } catch (error) {
            handleError("some error", res)
        }
    }


    async buildData(req, res, next) {
        const { id } = req.body
        console.log(req.body)

     
        if (id) {
            const sh = await models.forecast.findOne({where: {fileID: id}})
            // if(sh) return handleError( {message: "File already converted"}, res)
            try {
                // find file
                const sheet = await models.sheet.findOne({ where: { id } })
         
                if (sheet) {
                    // create json
                    const output = await xlsConverter(sheet.path)
                    let insert = false
                    let converted 

                   await output.forEach(elem => {
                        const { image, rank, name, sku, duration, num, expectedRank, brand } = elem
                        // filter data
                        if(image && isNumeric(rank) && name && isNumeric(sku) && duration && isNumeric(num) && isNumeric(expectedRank) && brand){
                            // insert  to table
                            const newForecast = models.forecast.create({image, rank, name, sku, duration, num, expectedRank, brand, fileID: id})
                            insert = true
                        }else{
                            // console.log({ image, rank, name, sku, duration, num, expectedRank, brand })
                        }
                        
                    })
                    if(insert){
                        await sheet.update({converted: 1})
                    }
                    res.json({ type: "success",output, sheet:converted })
                } else {
                    handleError({ message: "Sheet not fount" }, res)
                }
                // res.json(sheet)
            
            } catch (error) {
                console.log(error)
                handleError(error, res)
            }
        } else {
            handleError({ message: "Bad request" }, res)
        }

    }
}

module.exports = new AdminController()