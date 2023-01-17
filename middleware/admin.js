//401 for unauthorised 
//403 for forbidden


module.exports = function(req, res, next) {
    if(!req.user.isAdmin) res.status(403).send('access denied');
    next();
}