const config = require('config');

module.exports = function (){

if(!config.get("jwtprivatekey")){
    throw new Error('fatal error: jwtprivatekey is not defined');
  }
}