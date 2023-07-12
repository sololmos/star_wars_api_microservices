const Films = require ("../data");
const {response} = require("../utils");


module.exports= async (req, res)=>{
    const{id}=req.params;
   
    const films = await Films.getById(id);
    response(res,200,films.data )
    //res.status(200).json(characters);
    //console.log("characters")
}
  