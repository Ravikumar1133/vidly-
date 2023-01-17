 const winston = require('winston');
 const mongoose = require('mongoose');
 const config = require('config');


 module.exports = function (){
    const url = "mongodb://localhost/vidly";

     mongoose.connect(url,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then(() => winston.info(`Connected to ${url}`))
 .catch(()=>
   winston.add(winston.transports.File,{filename:'uncaughtexceptions.log'})
  );
  //.catch(err => console.error('Could not connect to MongoDB...'));
//new endpoint with new route handler 
 }