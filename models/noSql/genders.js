const mongoose = require("mongoose")

const GenderScheme = new mongoose.Schema(
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

module.exports = mongoose.model("genders", GenderScheme)