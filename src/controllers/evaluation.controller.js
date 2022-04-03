const express = require("express");
const app = express();
const Evaluation = require("../models/evalutaion.model");

router = express.Router();

router.get("", async (req, res) => {
    try {
        const evaluation = await Evaluation.find().lean().exec();
        return res.status(200).send(evaluation);
    } catch (err) {
        return res.status(500).send({ message: "Something went wrong..  try again later" });
    }
});
router.post("", async (req, res) => {
    try {
        const evaluation = await Evaluation.create(req.body);
        return res.status(200).send(evaluation);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

module.exports = router;