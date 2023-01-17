const winston = require("winston");
const logger = require('./logger');

module.exports  = function(err,req, res, next) {
//logging exception.
//diff login levels error,warn,info,verbose,debug,silly
   winston.error(err.message,err)// or winston.error(err.message)
   
     res.status(500).send('something failed');
     }
//here our err catch the error winston log the errors stores in transport file , which can be cross checked .     