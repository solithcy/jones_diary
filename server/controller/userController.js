const jwt = require('jsonwebtoken');
const User = require("../model/userModel");
const jwtSecret = process.env.JWT_SECRET;
if(!jwtSecret) throw new Error("Please set JWT_SECRET");

async function me(req, res){
  return res.status(200).json(req.user);
}

async function login(req, res){
  const {username, password} = req.body;
  let user;
  try{
    user = await User.login({username, password});
  }catch(e){
    return res.status(403).json({
      message: "Incorrect username or password"
    });
  }

  try{
    const token = jwt.sign({
      id: user.id
    }, jwtSecret, {
      expiresIn: "7d"
    });

    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 7))
    });
    res.status(200).json({
      ...user,
      token
    });
  }catch(e){
    res.status(500).json({
      message: e.message
    });
  }
}

async function register(req, res){
  
}

module.exports = {
  login, me, register
}
