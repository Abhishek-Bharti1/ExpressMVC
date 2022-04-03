const express = require("express");
const app = express();
const Submission = require("../models/submission.model");

router = express.Router();

router.get("", async (req, res) => {
    try {
        const submission = await Submission.find().lean().exec();
        return res.status(200).send(submission);
    } catch (err) {
        return res.status(500).send({ message: "Something went wrong..  try again later" });
    }
});
router.post("", async (req, res) => {
    try {
        const submission = await Submission.create(req.body);
        return res.status(200).send(submission);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

module.exports = router;