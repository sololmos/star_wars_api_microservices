//const data= require("../data/characters.json");

module.exports = (res, statusCode, data)=>{
    res.status(statusCode).json({
        error : false,
        data ,
    })
}