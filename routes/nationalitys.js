const express = require("express");
const router = express.Router();
const { getAll, createNationality } = require("../controllers/nationalitys")

//TODO http://localhost/users  GET, POST, PUT, DELETE
router.get("/", getAll)

router.post("/", createNationality)

module.exports = router