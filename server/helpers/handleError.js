const ErrorTypes = require('../constants/ErrorTypes');
const ErrorMessages = require('../constants/ErrorMessages');

const handleError = (error, res) => {
    switch (error.name) {
        case ErrorTypes.SEQUELIZE_VALIDATION_ERROR: return res.status(400).json({type: "error", message: error.message});
        case ErrorTypes.PERMISSION: return res.status(403).json({type: "error", message: ErrorMessages.ACCESS_DENIED });
            
        default: return res.status(400).json({type: 'error',  error});
    }
};
module.exports = handleError;