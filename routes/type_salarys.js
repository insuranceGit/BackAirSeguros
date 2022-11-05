const express = require("express");
const router = express.Router();
const { getAll, create } = require("../controllers/type_salarys")

//TODO http://localhost/users  GET, POST, PUT, DELETE
router.get("/", getAll)

router.post("/", create)

 module.exports = router