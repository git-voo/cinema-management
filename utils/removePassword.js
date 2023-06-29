const removePassword = (object, ...propertiesToRemove)=>{
    if(!object) return
    const { password, others, ...noPasswordUser } = object.toObject();
    for (const property of propertiesToRemove) {
        delete noPasswordUser[property];
      }
    return noPasswordUser
}



module.exports = removePassword;