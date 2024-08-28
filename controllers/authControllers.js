const User = require("../models/userModel");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    // const password = req.body.password;
    // const email = req.body.email;

    // short hand methed called 'Destructuring'
    const {email, password} = req.body;
    // 1. Find user using email
    const user = await User.findOne({email: email});
    //    a. not found user send error
    if(!user){
        return res.status(401).send("Unauthorized access!");
    }
    //    b. if found user then check password is currect.
    const passwordsMatch = bcrypt.compareSync(password, user.password);

    if(passwordsMatch){
        var token = jwt.sign({ _id: user._id, email: user.email, name: user.name }, process.env.TOKEN_SECRET_KEY);
        
        res.cookie('token', token, {httpOnly: true, secure: process.env.ENVIRONMENT === "development" ? false : true, maxAge: 1*60*60*1000})
        res.json({ _id: user._id, name: user.name, email: user.email })
    }else{
        res.status(401).send("Unauthorized access!(incurrect password)")
    }
}

const verifyLogin = async (req, res) => {
    res.status(200).json(req.user);
}

module.exports = {
    login,
    verifyLogin
}   