const mongoose = require("mongoose")

const Load_massiveScheme = new mongoose.Schema(
    {
        address:{
            type:String
        },
        cellphone:{
            type:Number
        },
        id_contractType:{
            type:String
        },
        dateAdmission:{
            type:Date
        },
        dateBirth:{
            type:Date
        },
        id_department:{
            type:String
        },
        document:{
            type:Number
        },
        email:{
            type:String
        },
        eps:{
            type:String
        },
        first_last_name:{
            type:String
        } ,
        first_name:{
            type:String
        } ,
        id_gender:{
            type:String
        } ,
        hoursWorkedMonth:{
            type:Number
        } ,
        id_documentType:{
            type:String
        } ,
        id_municipality:{
            type:String
        } ,
        ips:{
            type:String
        } ,
        position:{
            type:String
        },
        id_job:{
            type:String
        } ,
        id_maritalStates:{
            type:String
        } ,
        id_nationality:{
            type:String
        } ,
        phone:{
            type:Number
        } ,
        regimen:{
            type:String
        } ,
        salary:{
            type:Number
        } ,
        second_last_name:{
            type:String
        } ,
        second_name:{
            type:String
        } ,
        sendEmail:{
            type:Boolean
        } ,
        id_position:{
            type:String
        } ,
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("load_massives", Load_massiveScheme)


