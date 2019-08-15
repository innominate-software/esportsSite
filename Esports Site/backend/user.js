// /backend/user.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this is an example of what I think we should do very little of.
const MatchSchema = new Schema(
    {
        id: Number,
        gameId: Number,
        userIds: [],
        teamIds: [],
        result: String, //need to talk about format of value
    },
    { timestamps: true}
);

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
    matches: [MatchSchema],
    inGameName: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", UserSchema);