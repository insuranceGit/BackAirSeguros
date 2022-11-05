const express = require("express");
const router = express.Router();
const { getAll, createMunicipiality } = require("../controllers/municipialitys")

//TODO http://localhost/users  GET, POST, PUT, DELETE
router.get("/", getAll)

router.post("/", createMunicipiality )

 module.exports = router