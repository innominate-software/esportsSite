// /backend/models/user.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/UsersDB');
module.exports = exports = mongoose;

// this will be our data base's user structure 
const UserSchema = new Schema(
  {
    id: {
      type: Number,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    steamId: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    inGameName: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", UserSchema);