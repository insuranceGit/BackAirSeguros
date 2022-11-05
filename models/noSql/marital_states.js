const mongoose = require("mongoose")

const Marital_statesScheme = new mongoose.Schema(
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

module.exports = mongoose.model("Marital_states", Marital_statesScheme)