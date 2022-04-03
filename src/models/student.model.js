const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    rollId: { type: Number, required: true },
    currentBAtch: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true,
})

const Student = mongoose.model("students", studentSchema);
module.exports = Student;