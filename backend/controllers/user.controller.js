const User = require("../models/user.model.js")

//to be loaded on initial login/reg
const getUsers = async (req,res)=>{
    try {
        const users = await User.find({})
        res.status(200).json({
          message: "Users found successfully",
          users,
        });
    } catch (error) {
        res.status(500).json({ message: `Users not found: ${error.message}`});
    }
}

//to get user details
const getSingleUser = async (req,res) =>{
    try {
        const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json({
      message: "User found successfully",
      user,
    });
    } catch (error) {
        res.status(500).json({ message: `User not found: ${error.message}`});
    }
}

//for registration
const createUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(200).json({
        message: "User registered successfully",
        user,
      });
    } catch (error) {
      res.status(500).json({ message: `Registration unsuccessful: ${error.message}`});
    }
  };


  module.exports = {
    getUsers,
    getSingleUser,
    createUser,
  };