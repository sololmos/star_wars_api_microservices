const {FilmError} = require("../utils/errors");

module.exports=(req, res, next)=>{
    const{name}= req.body;
    if(name) return next();
    else throw new FilmError(" Soy el Filmvalidation de los middlwares y falta el nombre", 401);
}