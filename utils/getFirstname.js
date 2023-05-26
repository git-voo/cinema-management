const nameCase = require("./namecase")

function getFirstName(fullName){
    return fullName? nameCase(fullName.split(" ")[0]):null 
}


module.exports = getFirstName;