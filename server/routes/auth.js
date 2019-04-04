const express = require('express');
const router = express.Router();
const passport = require('passport')

const AuthControllers = require('../controllers/auth');


router.post("/register", AuthControllers.register);
router.post("/login", AuthControllers.login);
router.post("/confirm/email", passport.authenticate('jwt', { session: false }), AuthControllers.emailConfirm)

module.exports = router;