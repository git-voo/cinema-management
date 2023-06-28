const handleError = require("../../middlewares/error");

const validateUser = (req, res)=>{
    const {fullName, email, password} = req.body;

    if(fullName && email && password){
       return true
    }else if(!fullName){ 
        return handleError(res, 400, "user name is required")
    }else if(!email){
        return handleError(res, 400, "user email is required")
    }else if(!password){
        return handleError(res, 400, "user password is required")
    } 

}


module.exports = validateUser; 