const {User} = require('../../../models/user');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');




describe('user generationToken',()=>{
 it('should return a valid jwt',()=>{
     const payload ={
        _id: new mongoose.Types.ObjectId().toHexString(),
        isAdmin: true,
     };
        const user = new User(payload);
        const token = user.generateAuthToken();
        const decoded = jwt.verify(token,config.get('jwtprivatekey'));
        expect(decoded).toMatchObject(payload);
 });
});