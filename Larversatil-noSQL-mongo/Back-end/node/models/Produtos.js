const mongoose = require('mongoose')
const Schema = mongoose.Schema

const produtos = new Schema({
    nomeprodutos: {
    type: String,
    required: true
    },

    preco: {
    type: String,
    required: true
    },

    precofinal: {
    type: String,
    required: true
    }
})

mongoose.model("produtos", produtos)