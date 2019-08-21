// /backend/models/user.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's user structure 
const UserSchema = new Schema(
  {
    id: Number,
    username: String,
    firstName: String,
    lastName: String,
    profilePhoto: Image,
    steamId: String,
    password: String,
    email: String,
    birthday: String,
    matches: [],
    inGameName: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", UserSchema);