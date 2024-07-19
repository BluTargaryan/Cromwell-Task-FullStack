const User = require("../models/user.model.js")

//to be loaded on initial login/reg
const getUsers = async (req,res)=>{
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//to get user details
const getSingleUser = async (req,res) =>{
    try {
        const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//for registration
const createUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  module.exports = {
    getUsers,
    getSingleUser,
    createUser,
  };