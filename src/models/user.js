// User model 
const mongoose = require('mongoose');

// Defining schema 
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        max: 20,
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        max: 20,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    hash_password:{
        type:String,
        required:true,
    }
}, {timestamps:true});


// Export
module.exports = mongoose.model('User', userSchema);