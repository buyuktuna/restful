const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: " order were fetched"
    })
});
router.post("/", (req, res, next) => {
    res.status(201).json({
        message: " order was created"
    })
});
router.get("/:id", (req, res, next) => {

    res.status(200).json({
        message: " order details",
        id: req.params.id
    })
});
router.delete("/:id", (req, res, next) => {

    res.status(200).json({
        message: " order deleted",
        id: req.params.id
    })
});

module.exports = router;