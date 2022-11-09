const express = require("express");
const router = express.Router();
const { getAll,  createMassive, getById, update} = require("../controllers/load_massives")

//TODO http://localhost/users  GET, POST, PUT, DELETE
router.get("/", getAll)

router.post("/", createMassive)

router.get("/:id", getById);

router.put("/:id", update);


 module.exports = router