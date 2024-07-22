const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model.js");
const userRoute = require("./routes/user.route.js");
const app = express();

require('dotenv').config()

//to resolve credentail issues
var cors = require('cors')

app.use(cors())



//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/api", userRoute);

//read func, send displays in browser
app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});



  module.exports = app;