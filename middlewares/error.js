function handleError (res, code, error){
  if(code === 403){
    error = `${error} already exists with this email. Login to proceed`
  }else if(code ===500){
    error = `server error`

  }
  return  res.status(code).json({code, error})
}



module.exports = handleError;