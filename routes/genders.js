const express = require("express");
const router = express.Router();
const { getAll, createGender } = require("../controllers/genders")

//TODO http://localhost/users  GET, POST, PUT, DELETE
router.get("/", getAll)

router.post("/", createGender)

 module.exports = router