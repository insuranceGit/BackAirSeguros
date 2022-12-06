const mongoose = require("mongoose")

const Type_jobScheme = new mongoose.Schema(
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

module.exports = mongoose.model("type_jobs", Type_jobScheme)