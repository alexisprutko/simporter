class UserController {
    async getUser(req, res) {
        // console.log(req.user)
        const { id, firstName, lastName, email } = req.user
        res.status(200).json({ id, firstName, lastName, email })
    }
}

module.exports = new UserController()