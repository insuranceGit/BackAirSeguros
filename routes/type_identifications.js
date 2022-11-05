const express = require("express");
const router = express.Router();
const { getAll, createIdentification } = require("../controllers/type_identifications")

//TODO http://localhost/users  GET, POST, PUT, DELETE
router.get("/", getAll)

router.post("/", createIdentification)

 module.exports = router