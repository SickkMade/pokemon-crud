const mongoose = require("mongoose")

async function getList(){
    try{
        const pokemonCount = 151
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit="+pokemonCount)
        const data = await response.json();
        let pokeList = Array(pokemonCount)
        for(let i = 0; i < pokemonCount; i++){
            pokeList[i] = (data.results[i]['name'])
        }
        return pokeList
    } catch(e){
        console.error(e);
    }
}

const userSchema = new mongoose.Schema({
    pokemon: {
        type: [String],
        required:true,
    },
    name: {
        type: [String],
        required:true,
    },
})

module.exports = {
    getPokeList: getList,
    AddToUser: mongoose.model("user", userSchema)
}