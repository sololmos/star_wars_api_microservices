const Characters = require ("../data");
const {response} = require("../utils");


module.exports= async (req, res)=>{
    const{id}=req.params;
   
    const characters = await Characters.getById(id);
    response(res,200,characters.data )
    //res.status(200).json(characters);
    //console.log("characters")
}
  