const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const jwtSecret = process.env.JWT_SECRET;
if(!jwtSecret) throw new Error("Please set JWT_SECRET");

const auth = async (req, res, next) => {
  const token = req.cookies["token"];
  try{
    const decoded = jwt.verify(token, jwtSecret);
    req.user = await User.getById(decoded.id);
    next();
  }catch(e){
    return res.status(401).json({
      message: "Unauthorized"
    });
  }
}

module.exports = auth;
