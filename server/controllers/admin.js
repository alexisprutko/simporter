const handleError = require('../helpers/handleError')
const xlsConverter = require('../helpers/xlsConverter')
const models = require('../models')

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
        if (id) {
            try {
                const sheet = await models.sheet.findOne({ where: { id } })
                if (sheet) {
                    const output = await xlsConverter(sheet.path)
                    console.log(output)
                    res.json({ output })
                } else {
                    handleError({ message: "Sheet not fount" }, res)
                }
                res.json(sheet)
            } catch (error) {
                handleError(error, res)
            }
        } else {
            handleError({ message: "Bad request" }, res)
        }

    }
}

module.exports = new AdminController()