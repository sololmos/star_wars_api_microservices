const Planets = require ("../data");
const {response} = require("../utils");


module.exports= async (req, res)=>{
    const{id}=req.params;
   
    const planets = await Planets.getById(id);
    response(res,200,planets.data )
    //res.status(200).json(characters);
    //console.log("characters")
}
  