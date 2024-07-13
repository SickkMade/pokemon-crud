const controller = require("../models/pokemon-builder.js")
const user = controller.AddToUser

module.exports = {
    getPokemonBuilder: async (req, res) => {
        const pokeList = await controller.getPokeList()
        let nameQuery = req.query.name;

        if(nameQuery === undefined){
            res.redirect('/')
            return
        } else {
            nameQuery = nameQuery.toUpperCase()
        }
        const doesTrainerExist = await user.exists({name: nameQuery})
        if(!doesTrainerExist){
            await user.create({pokemon: [], name:nameQuery})
        }
        const trainer = await user.findOne({name:nameQuery})
        res.render("../views/pokemon-builder.ejs", {pokemon: pokeList, name: nameQuery, chosenPokemon: trainer.pokemon})
    },
    addToUserTeam: async (req, res) => {
        const trainer = await user.findOne({name:req.query.name.toUpperCase()})
        if(req.body['pokemon-151'] != ""){
            trainer.pokemon.push(req.body['pokemon-151'])
            trainer.save()
        }
        res.redirect('/pokemon-builder?name='+req.query.name)
    },
}