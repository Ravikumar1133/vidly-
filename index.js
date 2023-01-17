const winston = require('winston');
const express = require('express');
//const { process } = require('joi/lib/errors');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
require('./startup/prod')(app);


//throw new Error('something failed before start of application ');
/*const p = Promise.reject(new Error('failed due to promise rejection'));
p.then(()=>console.log('done'));
*/


const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));