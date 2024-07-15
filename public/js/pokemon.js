async function getPokeImage(pokemon){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokemon)
        const data = await response.json();
        return data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    } catch(e) {
        console.error(e)
    }
}

async function deletePokemon(){
    
}

const pokemen = document.querySelectorAll(".pokeImage")
pokemen.forEach(async pokemon => {
    pokemon.addEventListener("click", deletePokemon)

    const pokeSource = await getPokeImage(pokemon.parentElement.textContent)
    pokemon.src = pokeSource
})