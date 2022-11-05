const mongoose = require("mongoose")

const NationalitysScheme = new mongoose.Schema(
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

module.exports = mongoose.model("nationalitys", NationalitysScheme)