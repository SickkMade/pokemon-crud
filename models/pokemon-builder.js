

async function getList(){
    try{
        const pokemonCount = 151
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=pokemonCount")
        const data = await response.json();
        let pokeList = Array(pokemonCount)
        for(let i = 0; i < data.results.length; i++){
            pokeList[i] = (data.results[i]['name'])
        }
        return pokeList
    } catch(e){
        console.error(e);
    }
}

module.exports = {
    getPokeList: getList
}