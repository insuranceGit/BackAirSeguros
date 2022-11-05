const express = require("express");
const router = express.Router();
const { getAll, createContract } = require("../controllers/type_contracts")

//TODO http://localhost/users  GET, POST, PUT, DELETE
router.get("/", getAll)

router.post("/", createContract)

module.exports = router