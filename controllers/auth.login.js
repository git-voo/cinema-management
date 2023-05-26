const userModel = require("../models/users");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Email and password are required" });

  userModel.findOne({ email }, (err, user) => {
    if (err)
      return res
        .status(500)
        .json({ code: 500, error: "Internal error occurred" });
    if (user && user.password === password) {
      const { password, ...noPasswordUser } = user.toObject();
      return res
        .status(200)
        .json({ code: 200, message: "login successful", data: noPasswordUser });
    } else if (!user) {
      return res.status(404).json({
        code: 404,
        error: "User does not exist. Please signup to continue",
      });
    } else if (user && user.password !== password)
      return res.status(401).json({ code: 401, error: "Incorrect password" });
  });
};

module.exports = login;
