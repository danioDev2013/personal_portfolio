// Create the required custom methods at the bottom of this file

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is Required"
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  message: {
    type: String,
    validate: [({ length }) => length >= 1, "Text should be longer."]
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});


// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
