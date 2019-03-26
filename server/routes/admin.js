const passport = require('passport')
const express = require('express')
const role = require('../middleware/role')
const { ADMIN } = require('../constants/roles')
const router = express.Router()
const upload = require('../middleware/upload')

const AdminController = require('../controllers/admin')

router.post("/upload/xlc", passport.authenticate('jwt', { session: false }), role(ADMIN), (req,res, next) => {
    console.log(req.file)
    next()
}, upload.single('file') , AdminController.uploadXlc)

module.exports = router