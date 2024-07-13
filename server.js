const express = require("express")
const app = express()
const connectDB = require('./config/database');
const homeRoutes = require('./routes/home')
const pokemonBuilderRoutes = require('./routes/pokemon-builder')

require('dotenv').config({path: './config/.env'});

connectDB();

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/pokemon-builder', pokemonBuilderRoutes)

app.listen(process.env.PORT)

// TOMMOROW: ADD