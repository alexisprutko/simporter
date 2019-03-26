const handleError = require('../helpers/handleError')

class AdminController {
    async uploadXlc(req, res, next) {
        const { file } = req
        if(file){
            res.json({ok: "ok"}) 
        }else{
            handleError({ type: "error" },res)
        }
    }
}

module.exports = new AdminController()