const mongoose = require("mongoose")
const employeeSchema = mongoose.Schema({
    first_name:{
        type: String, 
        max: 100,
        require:true
    },
    last_name:{
        type: String, 
        max: 50,
        require:true
    },
    email:{
        type: String, 
        max: 50,
        unique: true
    },
    gender:{
        type:String,
        max:25,
        uppercase:true,
        enum:["MALE", "FEMALE", "OTHER"]
    },
    salary:{
        type:Number,
        require: true
    }
})
module.exports = mongoose.model("employees", employeeSchema)
