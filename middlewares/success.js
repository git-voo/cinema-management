function handleSuccess(res, code, message, data) {
  if (message==="") message="Operation successful"
  return res.status(code).json({
    code,
    message,
    data: data.length?data.reverse():data
  });
}

module.exports = handleSuccess;
