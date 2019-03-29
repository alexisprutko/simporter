const models = require('../models/')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const handleError = require('../helpers/handleError')
const ErrorMessages = require('../constants/ErrorMessages')
const ErrorTypes = require('../constants/ErrorTypes')
const { PUBLIC } = require('../constants/roles')


class Auth {
    //login
    async login(req, res) {
        const { body: { email, password } } = req
        if (!email) return handleError({ message: ErrorMessages.EMAIL_IS_REQ }, res)
        if (!password) return handleError({ message: ErrorMessages.PASSWORD_IS_REQ }, res)

        const user = await models.user.findOne({ where: { email } })
        if (!user) return handleError({ message: ErrorMessages.USER_IS_NOT_FOUND }, res)
        const passwordValid = await user.validPassword(password)
        if (passwordValid) {
            const token = jwt.sign(user.toJson(), "secret", { expiresIn: 60 * 60 * 5 })
            res.status(200).json({ type: "success" ,token, user: user.toJson() })
        } else {
            // 
            handleError({ message: ErrorMessages.EMAIL_OR_PASSWORD_INCORRECT }, res)
        }

    }
    // register
    async register(req, res) {
        let { body: { email, role, password } } = req
        try {
            // check email in request
            if (role && role !== "PUBLIC") handleError({ name: ErrorTypes.PERMISSION }, res)
            if (!password || password.length < 6) handleError({ message: ErrorMessages.PASSWORD_SHOULD_BE }, res)
            if (email) {
                const con = await models.user.findOne({ where: { email } })
                //email exist    
                if (!con) {
                    try {
                        // create hash 
                        const hash = await bcrypt.hash(password, 10)
                        // create new user
                        const newUser = await models.user.create({
                            ...req.body,
                            role: PUBLIC,
                            password_hash: hash
                        })
                        const token = jwt.sign(newUser.toJson(), "secret", { expiresIn: 60 * 60 * 5 })
                        // add confirm email
                        res.status(201).json({ type: "success" ,user:newUser.toJson()   , token })
                    } catch (e) {
                        handleError(e, res)
                    }
                } else {
                    handleError({ message: ErrorMessages.EMAIL_IS_EXIST }, res)
                }

            } else {
                handleError({ message: ErrorMessages.EMAIL_IS_REQ }, res)
            }
        } catch (error) {
            handleError(error, res)
        }

    }
    async emailConfirm() {
        // email confirm
    }
    async resetPassword() {
        // reset Password
    }
}

module.exports = new Auth()
