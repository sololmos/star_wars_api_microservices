const {catchedAsync} =require("../utils")

//permite un trycatch en todas las funciones controladoras
module.exports={
    getCharacters : catchedAsync(require("./getCharacters")),
    getCharacterById : catchedAsync(require("./getCharacterById")),
    createCharacters : catchedAsync(require("./createCharacters")),
}