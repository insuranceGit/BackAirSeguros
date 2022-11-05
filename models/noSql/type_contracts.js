const mongoose = require("mongoose")

const Type_contractScheme = new mongoose.Schema(
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

module.exports = mongoose.model("type_contracts", Type_contractScheme)