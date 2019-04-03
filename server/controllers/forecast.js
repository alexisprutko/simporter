const models = require('../models/')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const handleError = require('../helpers/handleError')
const ErrorMessages = require('../constants/ErrorMessages')
const ErrorTypes = require('../constants/ErrorTypes')
const { PUBLIC } = require('../constants/roles')


class ForecastController {
    async getDataTop(req, res, next){
        try {
            const data = await models.forecast.findAll({
                limit: 100,
                order: [["createdAt", "DESC"]]
            })
            res.json({type: "success", data})
        } catch (error) {
            handleError(error ,res)
        }
    }
   
}

module.exports = new ForecastController()
