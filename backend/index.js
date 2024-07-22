const mongoose = require("mongoose");
const app = require('./app')

//connect db, checks & error catch
mongoose
  .connect(
    `mongodb+srv://opeyemiyolo:${process.env.MONGODB_PASSWORD}@cluster4.q9phl7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster4`
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