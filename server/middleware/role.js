const roles = require('../constants/roles');
const handleError = require('../helpers/handleError')
const ErrorTypes = require('../constants/ErrorTypes')

module.exports = (role) => (req, res, next) => {
    if (role === roles.PUBLIC) {
        return next();
    } else if (role === roles.AUTH && (req.user.dataValues.role === roles.AUTH || eq.user.dataValues.role === roles.ADMIN)) {
        return next();
    } else if (role === roles.ADMIN && req.user.dataValues.role === roles.ADMIN) {
        return next();
    }
    return handleError({ name: ErrorTypes.PERMISSION }, res)

};
