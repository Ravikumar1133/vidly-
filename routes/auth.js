const config = require('config');
const JOi = require('joi');
const jwt = require('jsonwebtoken');
const _ = require("lodash");
const bcrypt = require('bcrypt');
const {User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
 //user crediential validation   
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
//user email auth
     let user = await User.findOne({ email: req.body.email});
     if(!user) return res.status(400).send('user email is not found...');//new logic used not operator, but best practise to use invalid password or email
//user password auth:
       const passvalidation = await bcrypt.compare(req.body.password,user.password);
       if(!passvalidation) return res.status(400).send('invalid password');

       const token = user.generateAuthToken();
         res.send(token); 
});

function validate(req) {
    const schema ={
         email:JOi.string().min(6).max(255).required().email(),
         password:JOi.string().min(6).max(255).required()
    };

     return  JOi.validate(req,schema)  
}



module.exports = router;