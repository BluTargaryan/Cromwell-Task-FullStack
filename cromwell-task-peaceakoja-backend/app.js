const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model.js");
const userRoute = require("./routes/user.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/api/users", userRoute);

//read func, send displays in browser
app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

//connect db, checks & error catch
mongoose
  .connect(
    "mongodb+srv://opeyemiyolo:DX6dUQX5aMPijuwi@cluster4.q9phl7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster4"
  )
  .then(() => {
    console.log("Connected to db");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connect failed");
  });