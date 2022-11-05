const express = require("express");
const router = express.Router();
const { validatorCreateItem } = require("../validators/users")
const { getUsers, createUser } = require("../controllers/users")
const customHeader = require("../middleware/customHeader")

//TODO http://localhost/users  GET, POST, PUT, DELETE
router.get("/", getUsers)

router.post("/", validatorCreateItem, createUser)

 module.exports = router