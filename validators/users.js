const { check } = require("express-validator");

const validateResults =  require("../utils/handleValidator")

const validatorCreateItem= [
    check("name")
    .exists()
    .notEmpty(),

    check("age")
    .exists()
    .notEmpty(),

    check("email")
    .exists()
    .notEmpty(),

    check("password")
    .exists()
    .notEmpty(),

   
    (req, res, next) => {
        return validateResults(req, res, next);
    }

]


module.exports =  { validatorCreateItem };