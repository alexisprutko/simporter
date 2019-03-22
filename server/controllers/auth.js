const bcrypt = require('bcryptjs')
const models = require('../models/')

const jwt = require('jsonwebtoken')




class Auth {
    //login
    async login(req, res) {

        res.json({ register: "ok" })

    }
    // register
    async register(req, res) {
        const newUser = await models.user.create(req.body)
        const token = jwt.sign({
            email: newUser.email,
            id: newUser._id,
            lastName: newUser.lastName,
            firstName: newUser.firstName,
        }, "secret", { expiresIn: 60 * 60 * 5 })
        
        res.json({ register: "ok", newUser, token })
    }

}

module.exports = new Auth()
