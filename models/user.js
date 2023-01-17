const JOi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const boolean = require('joi/lib/types/boolean');

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
      },
    email:{
        type:String,
        required: true,
        minlength: 6,
        maxlength:255,
        unique: true
    },
    password:{
        type:String,
        required: true,
        minlength: 6,
        maxlength:1024
    },
    isAdmin:Boolean 
});

userschema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id,isAdmin:this.isAdmin},config.get('jwtprivatekey'));  
    return token;
}
const User = mongoose.model('User',userschema);

function validateUser(user) {
    const schema ={
         name:JOi.string().min(5).max(50).required(),
         email:JOi.string().min(6).max(255).required().email(),
         password:JOi.string().min(6).max(255).required()
    };

     return  JOi.validate(user,schema)  
}

exports.User = User;
exports.validateUser= validateUser;