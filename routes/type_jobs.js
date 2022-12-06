const express = require("express");
const router = express.Router();
const { getAll, createJob } = require("../controllers/type_jobs")

//TODO http://localhost/users  GET, POST, PUT, DELETE
router.get("/", getAll)

router.post("/", createJob)

module.exports = router