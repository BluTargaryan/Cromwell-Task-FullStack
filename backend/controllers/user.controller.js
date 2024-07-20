const User = require("../models/user.model.js")



const loginUser = async (req, res) => {
  try {
      const { email, password } = req.body;

      // Find the user in the database
      const user = await User.findOne({ email });

      // If user not found or password doesn't match, return an error
      if (!user || user.password !== password) {
          return res.status(401).json({ message: 'Invalid email or password' });
      }

      // If the user is found and the password matches
      res.status(200).json({ 
        message: 'Login successful',
        userId: user._id  // Send the user ID
      });
  } catch (error) {
      res.status(500).json({ message: `Server error: ${error.message}` });
  }
};


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
    loginUser,
    getSingleUser,
    createUser,
  };