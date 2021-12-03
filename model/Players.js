const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema({
    name:{type: String, required:true},
    Age:{type: Number, required:true},
    Score:{type: Number, required:true},
    },{timestamps:true})

const Player = mongoose.model('player', playerSchema)
module.exports = Player 