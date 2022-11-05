const express = require("express");
const router = express.Router();
const uploadMidleware = require("../utils/handleStorage")
const {createItem} = require("../controllers/storage")

router.post("/", uploadMidleware.single('myFile'), createItem)


module.exports = router;