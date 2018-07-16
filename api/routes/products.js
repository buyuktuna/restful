const express = require("express");
const router = express.Router();



router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "handling get to /products"
    })
});

router.post("/", (req, res, next) => {
    res.status(201).json({
        message: "handling POST to /products"
    })
});

router.get("/:id", (req, res, next) => {
    const id = req.params.id;
    if(id === "special"){
        res.status(200).json({
            message: "woww",
            id: id
        });
    }else{
        res.status(200).json({
            message: "you passed " + id
        })
    }
});
router.patch("/:id", (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: "updated proıduyct",
        id: id
    });

});
router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: "deleted proıduyct",
        id: id
    });

});



module.exports = router;