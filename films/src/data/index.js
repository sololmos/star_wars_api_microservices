const axios=require ("axios")


module.exports = {
    list : async ()=>{
        return await axios.get("http://database:8004/Film") ;
    },
    getById : async(_id)=>{
        return await axios.get(`http://database:8004/Film/${_id}`); 
    },
    create : async ()=>{
     throw Error ("Hay un error para crear pelicula")
    }
}




//-------------------------------------------
// const films= require("./films.json");

// module.exports = {
//     list : async ()=>{
//         return films;
//     }
// }

