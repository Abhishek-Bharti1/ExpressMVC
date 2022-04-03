const express = require("express");
// const app = express();
const Student = require("../models/student.model");

var router = express.Router();

router.get("/", async (req, res) => {
    try {
    console.log("studenrts");
        const student = await Student.find().lean().exec();
        return res.status(200).send(student);
    } catch (err) {
        return res.status(500).send({ message: "Something went wrong..  try again later" });
    }
});
router.post("", async (req, res) => {
    try {
        const student = await Student.create(req.body);
        return res.status(201).send(student);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

module.exports = router;