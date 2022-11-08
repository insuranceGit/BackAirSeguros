const mongoose = require("mongoose")

const DepartmentScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        code:{
            type:Number
        } 
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("departments", DepartmentScheme)