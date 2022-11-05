const express = require("express");
const router = express.Router();
const { getAll, createActivity } = require("../controllers/type_activitys")

//TODO http://localhost/users  GET, POST, PUT, DELETE
router.get("/", getAll)

router.post("/", createActivity)

module.exports = router