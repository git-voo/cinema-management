const handleError = require("../../middlewares/error");

const validateCinema= (req, res)=>{
    const {state, city, address, email, password, vendorId} = req.body;

    if(state && city && address && vendorId && email && password){
       return true
    }
    
    else if(!state){ 
        return handleError(res, 400, "location detail 'state' is required")
    } 
    else if(!city){ 
        return handleError(res, 400, "location detail 'city' is required")
    } 
    else if(!address){ 
        return handleError(res, 400, "location detail 'address' is required")
    } 
    else if(!vendorId){ 
        return handleError(res, 400, "cinema's vendor is required")
    }
    else if(!email){
        return handleError(res, 400, "cinema's email is required")
    }else if(!password){
        return handleError(res, 400, "cinema's password is required")
    }

}


module.exports = validateCinema; 