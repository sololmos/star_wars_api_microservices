//const characters= require("./characters.json");
const axios=require ("axios")


module.exports = {
    list : async ()=>{
        return await axios.get("http://database:8004/Character") ;
    },
    getById : async(_id)=>{
        return await axios.get(`http://database:8004/Character/${_id}`); 
    },
    create : async ()=>{
     throw Error ("Hay un error para crear personaje")
    }
}

//----------------
// const characters= require("./characters.json");


// module.exports = {
//     list : async ()=>{
//         return characters;
//     },
//     create : async ()=>{
//      throw Error ("Hay un error para crear personaje")
//     }
// }