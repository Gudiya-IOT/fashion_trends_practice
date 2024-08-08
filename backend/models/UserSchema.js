const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        id:{
            type: Number,
            required: true,
            unique: true
        } ,
        username: {
            type: String,
            required: true
        },
        useremail: {
            type: String,
            required: true
        },
        password: {
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
        role: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        salary: {
            type: Number,
            required: true
        },
        skills: {
            type: [String],
            required: true
        }
      }
);

const UserCollection = mongoose.model("users",UserSchema);

module.exports = UserCollection;