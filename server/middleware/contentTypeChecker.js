const contentTypeChecker = (type) => (req, res, next) => {
    req.headers['content-type'] = type
    console.log(req.headers['content-type'])
    next()
}

module.exports = contentTypeChecker