const mongoose = require("mongoose")

const Load_massiveScheme = new mongoose.Schema(
    {
        address:{
            type:String
        },
        cellphone:{
            type:Number
        },
        contractType:{
            type:Number
        },
        dateAdmission:{
            type:Number
        },
        dateBirth:{
            type:Number
        },
        department:{
            type:Number
        },
        document:{
            type:Number
        },
        email:{
            type:Number
        },
        eps:{
            type:Number
        },
        first_last_name:{
            type:Number
        } ,
        first_name:{
            type:Number
        } ,
        gender:{
            type:Number
        } ,
        hoursWorkedMonth:{
            type:Number
        } ,
        id_documentType:{
            type:Number
        } ,
        id_municipality:{
            type:Number
        } ,
        ips:{
            type:Number
        } ,
        job:{
            type:Number
        } ,
        maritalStates:{
            type:Number
        } ,
        nationality:{
            type:Number
        } ,
        phone:{
            type:Number
        } ,
        regimen:{
            type:Number
        } ,
        salary:{
            type:Number
        } ,
        second_last_name:{
            type:Number
        } ,
        second_name:{
            type:Number
        } ,
        sendEmail:{
            type:Number
        } 
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("load_massives", Load_massiveScheme)


