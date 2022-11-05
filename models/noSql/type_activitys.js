const mongoose = require("mongoose")

const Type_activityScheme = new mongoose.Schema(
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

module.exports = mongoose.model("type_activitys", Type_activityScheme)