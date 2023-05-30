const handleError = require("../../middlewares/error");

const validateVendor = (req, res)=>{
    const {name, email, password} = req.body;

    if(name && email && password){
       return true
    }else if(!name){ 
        return handleError(res, 400, "vendor name is required")
    }else if(!email){
        return handleError(res, 400, "vendor email is required")
    }else if(!password){
        return handleError(res, 400, "vendor password is required")
    } 

}


module.exports = validateVendor; 