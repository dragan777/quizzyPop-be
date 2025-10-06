const express = require('express');
const router = express.Router();
const { getItems, addItem } = require('../controllers/apiController');
const jwtFilter = require("../middleware/filter.js");

const exPaths = ["/login", "/register", "/public"];

router.use(jwtFilter(exPaths));

router.get("/public", (req, res) => {
    res.json({ message: "This is public" });
});

router.get("/protected", (req, res) => {
    console.log("contorles",req.user);
    res.json({ message: "Protected aaaaaaaaaaa", user: req.user });
});

router.post("/register", (req, res) => {
    res.json({ message: "Register endpoint" });
});


module.exports = router;
