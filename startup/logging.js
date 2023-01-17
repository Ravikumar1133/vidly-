const { process } = require('joi/lib/errors');
const winston = require('winston');
//require('winston-mongodb');
require('express-async-errors');

module.exports = function (){

    /*
process.on('unhandledRejection', (err)=>{
  console.log('we caugth an unhanledrejection or promise rejection'); 
  winston.error(err.message,err);
  process.exit(1);
})*/

/*winston.(winston.transports.File,{filename:'uncaughtexception.log'});
process.on('unhandledRejection', (err)=>{
   throw err;
});
*/
/*
winston.handleException(
    new winston.transports.Console({colorize: true,prettyPrint: true}),
    new winston.transports.File({filename:'uncaughtexception.log'})
)
process.on('unhandledRejection',(ex)=>{
     throw ex;
});
*/
/*
process.on('uncaughtException', (err)=>{
    console.log('we caugth an exception'); 
    winston.error(err.message,err);
  })*/
/*
winston.add(winston.transports.File,{filename:'winstonlogfile.log'});
winston.add(winston.transports.MongoDB,{
 db:'mongodb://localhost/vidly',
});*/
}