
const mongoose= require("mongoose");
const {MONGO_URI}=require("../config/envs");
const characterSchema = require("./schemas/characterSchema");
const filmSchema = require("./schemas/filmSchema");
const planetSchema = require("./schemas/planetSchema");

const conn=mongoose.createConnection(MONGO_URI);

//const Character= conn.model("Character", require("./schemas/characterSchema"));
//const Film= conn.model("Film", require("./schemas/filmSchema"));
//const Planet= conn.model("Planet", require("./schemas/planetSchema"));


//Character.find().populate().then((res)=>console.log(res))
//Planet.find().then((res)=>console.log(res))

// node .\src\database\index.js

module.exports={
    Character : conn.model("Character", require("./schemas/characterSchema")),
    Film : conn.model("Film", require("./schemas/filmSchema")),
    Planet : conn.model("Planet", require("./schemas/planetSchema")),
}