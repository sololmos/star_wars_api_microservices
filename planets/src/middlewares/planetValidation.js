const {PlanetError} = require("../utils/errors");

module.exports=(req, res, next)=>{
    const{name}= req.body;
    if(name) return next();
    else throw new PlanetError(" Soy el Planetvalidation de los middlwares y falta el nombre", 401);
}