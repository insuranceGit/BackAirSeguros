const mongoose = require("mongoose")

const Type_salaryScheme = new mongoose.Schema(
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

module.exports = mongoose.model("type_salarys", Type_salaryScheme)