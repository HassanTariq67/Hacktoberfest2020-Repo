const express = require("express");
const router = express.Router();
const { connection } = require("../db.js");

router.get("/course",async (req,res,next) => {
    connection.query("Select * FROM course", function(err, result) {
        if (err) {
            console.log(err);
            res.json({ error: true });
        } else 
                res.json(result);
    });
});

module.exports = router;