const roles = require('../constants/roles');

module.exports = (role) => (req, res, next) => {
    if (role === roles.PUBLIC) {
        return next();
    } else if (role === roles.AUTH && (req.user.dataValues.role === roles.AUTH || eq.user.dataValues.role === roles.ADMIN)) {
        return next();
    } else if (role === roles.ADMIN && req.user.dataValues.role === roles.ADMIN) {
        return next();
    }
    return  res.status(403).send({ error: " error " });
};
