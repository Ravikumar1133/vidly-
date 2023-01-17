 const bcrypt = require('bcrypt');
 //generating salt is somekind of hash added before our hash in order to make it difficult to misuse


async function run(){
    const salt = await bcrypt.genSalt(10);
    const hashed = await  bcrypt.hash('password123',salt);
    console.log(salt);
    console.log(hashed);
}

run();
 