const passport = require('passport')
const express = require('express')
const router = express.Router()

const role = require('../middleware/role')
const { AUTH, PUBLIC, ADMIN } = require('../constants/roles')

const AuthControllers = require('../controllers/auth')


router.post("/register", AuthControllers.register );
router.post("/login",  passport.authenticate('jwt', { session: false }), role(ADMIN), AuthControllers.login);

module.exports = router;