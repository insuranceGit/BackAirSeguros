const mongoose = require("mongoose")

const MunicipialityScheme = new mongoose.Schema(
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

module.exports = mongoose.model("municipialitys", MunicipialityScheme)