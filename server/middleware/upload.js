const multer = require('multer')
const moment = require('moment')
const path = require('path')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        return cb(null, path.resolve("uploads/", "admin/", "sheets"))
    },
    filename(req, file, cb) {
        !file && cb(null, false)
        const date = moment().format('DDMMYYYY-HHmmss_SSS')
        return cb(null, `${date}-${file.originalname}`)
    }

})
const fileFilter =  (req, file, cb) => {
    if (file.mimetype === 'application/vnd.ms-excel') {
        req.file = file
        cb(null, true)
    } else {
        cb(null, false)
    }
}
 const onError = (err, next) => {
    // console.log('error', err);
    next();
  }

module.exports = multer({
    storage,
    fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 },
    onError,
})