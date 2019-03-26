
const passport = require('passport');
const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');


router.get("/", passport.authenticate('jwt', { session: false }), UserController.getUser);

module.exports = router;