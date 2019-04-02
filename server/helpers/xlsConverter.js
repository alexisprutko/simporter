const xlstojson = require("xls-to-json")

module.exports = async (path) => {
  
    return new Promise((res, rej) => {
        xlstojson({
            	input: path,  // input xls 
                output: "output.json", // output json 
                lowerCaseHeaders:true
            }, function(err, result) {
                if(err) {
                    rej(err)
                } else {
                  res(result)
                }
            })
    })
    
}