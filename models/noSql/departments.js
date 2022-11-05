const mongoose = require("mongoose")

const DepartmentScheme = new mongoose.Schema(
    {
        name:{
            type:String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("departments", DepartmentScheme)