const mongoose = require('mongoose')
const Schema = mongoose.Schema

const comentarios = new Schema({
    nome: {
    type: String,
    required: true
    },

    msg: {
    type: String,
    required: true
    }
})

mongoose.model("comentarios", comentarios)