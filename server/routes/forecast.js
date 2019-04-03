const passport = require('passport')
const express = require('express')

const router = express.Router()

const ForecastController = require('../controllers/forecast')

router.get("/", passport.authenticate('jwt', { session: false }), ForecastController.getDataTop)

module.exports = router   