const mongoose = require('mongoose')


const registerSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    }
})


module.exports = mongoose.model('RegisteredStudent',registerSchema)