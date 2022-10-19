const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:true,
        max:100,
        primaryKey: true
    },
    email:{
        type:String,
        require:true,
        max:50,
        unique: true
    },
    password:{
        type:String,
        require:true,
        max:50
    }
})
module.exports = mongoose.model("users", userSchema)
