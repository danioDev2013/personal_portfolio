// Add code to userModel.js to complete the model
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const User = require("./userModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/contactdb", { useNewUrlParser: true });

// Routes

// Route to post our form submission to mongoDB via mongoose
app.post("/submit", ({body}, res) => {
  // Create a new user using req.body
  const user = new User(body);

  User.create(user)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
