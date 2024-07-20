const express = require("express");
const User = require("../models/user.model.js");
const router = express.Router();

const {
    loginUser,
    getSingleUser,
    createUser
  } = require("../controllers/user.controller.js");

router.get("/user/:id", getSingleUser);
router.post("/user/login", loginUser);
router.post("/user/register", createUser);

module.exports = router;