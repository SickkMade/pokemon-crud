const express = require("express")
const router = express.Router();
const pokemonBuilderController = require('../controllers/pokemon-builder')

router.get('/', pokemonBuilderController.getPokemonBuilder);

router.post('/addToUserTeam', pokemonBuilderController.addToUserTeam)

module.exports = router;