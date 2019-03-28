const bcrypt = require('bcryptjs')

const hashPassword = async (user) => await bcrypt.hash(user.password, 10)
    
module.exports = hashPassword