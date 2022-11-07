const express = require("express");
const router = express.Router();
const { getAll,  createMassive} = require("../controllers/load_massives")

//TODO http://localhost/users  GET, POST, PUT, DELETE
router.get("/", getAll)

router.post("/", createMassive)

 module.exports = router