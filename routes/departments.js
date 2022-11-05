const express = require("express");
const router = express.Router();
const { getAll, createDepartment } = require("../controllers/departments")

//TODO http://localhost/users  GET, POST, PUT, DELETE
router.get("/", getAll)

router.post("/", createDepartment)

 module.exports = router