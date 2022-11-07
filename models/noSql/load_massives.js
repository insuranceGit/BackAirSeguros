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
            type:mongoose.Types.ObjectId
        },
        dateAdmission:{
            type:Date
        },
        dateBirth:{
            type:Date
        },
        id_department:{
            type:mongoose.Types.ObjectId
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
            type:mongoose.Types.ObjectId
        } ,
        hoursWorkedMonth:{
            type:Number
        } ,
        id_documentType:{
            type:mongoose.Types.ObjectId
        } ,
        id_municipality:{
            type:mongoose.Types.ObjectId
        } ,
        ips:{
            type:String
        } ,
        id_job:{
            type:mongoose.Types.ObjectId
        } ,
        id_maritalStates:{
            type:mongoose.Types.ObjectId
        } ,
        id_nationality:{
            type:mongoose.Types.ObjectId
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
        } 
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model("load_massives", Load_massiveScheme)


