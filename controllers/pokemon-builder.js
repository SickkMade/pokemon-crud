const controller = require("../models/pokemon-builder.js")

module.exports = {
    getPokemonBuilder: async (req, res) => {
        const pokeList = await controller.getPokeList()
        res.render("../views/pokemon-builder.ejs", {pokemon: pokeList})
    },
    addToUserTeam: (req, res) => {
        res.redirect('/pokemon-builder')
    },
}