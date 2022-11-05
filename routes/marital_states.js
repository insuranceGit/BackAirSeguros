const express = require("express");
const router = express.Router();
const { getAll, createStatus } = require("../controllers/marital_states")

//TODO http://localhost/users  GET, POST, PUT, DELETE
router.get("/", getAll)

router.post("/", createStatus)

module.exports = router