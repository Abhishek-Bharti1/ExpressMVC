const mongoose = require("mongoose");

console.log("userController");

const userSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    gender: { type: String, require: true },
    dateofbirth: { type: String, require: true },
    type: {
        type: String,
        enum: ['student', 'instructor'],
        default: 'student',
    },

}, {
    versionKey: false,
    timestamps: true,
});

const User = mongoose.model("user", userSchema); // -->"user" is collection followed by Schema
module.exports = User;
