const removePassword = (object)=>{
    if(!object) return
    const { password, ...noPasswordUser } = object.toObject();

    return noPasswordUser
}



module.exports = removePassword;