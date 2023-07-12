const server=require("./src/server");

const {Character, Film, Planet}= require("./src/database");

//Character.find().then((res)=> console.log(res))
//Character.list().then((res)=> console.log(res))
//Character.get(1).then((res)=> console.log(res))

//---------------CHARACTERS--------------------------
// Character.insert({
//     _id:"200",
//     name:"Sol Olmos",
//     height: "1,60",
//     hair_color:  "blonde",
//     eye_color: "brwon",
//     birth_year:  "3-4-1993",
//     gender:  "female",
// }).then((res)=>console.log(res))
//characterSchema.list().then((res)=>console.log(res))

//---------------FILMS--------------------------
//Film.list().then((res)=> console.log(res))
//Film.get(1).then((res)=> console.log(res))
// Film.insert({
//     _id:"200",
//     name:"Solanda",
//     director: "graciele",
//     producer: "Jorge",
//     release_date: 93,
// }).then((res)=>console.log(res))


//---------------PLANET--------------------------
//Planet.list().then((res)=> console.log(res))
//Planet.get(2).then((res)=> console.log(res))
// Planet.insert({
//     _id:"200",
//     name:"Solplanetario",
//      diameter: "90-60-90",
//      climate: "warm",
   
    
// }).then((res)=>console.log(res))


server.listen(8004, ()=>{
    console.log("Database service on port 8004");
});