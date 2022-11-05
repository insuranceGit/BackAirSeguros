const mongoose = require("mongoose")

const Type_identificationScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        code:{
            type:String
        }    
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("type_identifications", Type_identificationScheme)