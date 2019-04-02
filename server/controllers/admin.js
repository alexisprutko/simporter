const handleError = require('../helpers/handleError')
const models = require('../models')

class AdminController {
    async uploadXlc(req, res, next) {
        const { file } = req
        if (file) {
        
            const newSheet = await models.sheet.create(file)
            console.log(newSheet)
            res.json({ type: "success", sheet: newSheet.toJson() })
        } else {
            handleError({ message: "Please try again" }, res)
        }
    }
    async getSheets(req,res, next){
        try {
            const sheetList = await models.sheet.findAll({limit: 100, 
                order: [ [ 'createdAt', 'DESC' ]]})
            res.json({type: "success", data: sheetList})
        } catch (error) {
           handleError("some error",res) 
        }
    }
}

module.exports = new AdminController()