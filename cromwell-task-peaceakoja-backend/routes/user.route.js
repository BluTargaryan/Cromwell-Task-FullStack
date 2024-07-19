const express = require("express");
const User = require("../models/user.model.js");
const router = express.Router();

const {
    getUsers,
    getSingleUser,
    createUser
  } = require("../controllers/user.controller.js");

router.get("/", getUsers);

router.get("/:id", getSingleUser);

router.post("/", createUser);

module.exports = router;