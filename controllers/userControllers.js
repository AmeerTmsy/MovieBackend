const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require("../models/userModel");

const getAllUsers = async (req, res) => {

    const users = await User.find({});
    res.json(users)
    // res.send('genre world')
}

const addUser = async (req, res) => {
    // 1. Get data from request body
    const data = req.body;
    // encription of data
    const hash = bcrypt.hashSync(data.password, saltRounds);
    // 2. Create a document using data
    // const user = new User(data);
    // creating the user with new hashed 'password'
    const user = new User({
        ...data,
        password: hash
    });
    // 3. Save document to the database
    await user.save();
    console.log("hello"+user)
    res.json(user);
    // res.send('user world')
}


module.exports = {
    getAllUsers,
    addUser
}