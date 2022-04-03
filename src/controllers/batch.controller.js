const express = require("express");
// const app = express();
const Batch = require("../models/batch.model");

var router = express.Router();

router.get("", async (req, res) => {
    try {
        const batch = await Batch.find().lean().exec();
        return res.status(200).send(batch);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});
router.post("", async (req, res) => {
    try {
        const batch = await Batch.create(req.body);
        return res.status(200).send(batch);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

module.exports = router;