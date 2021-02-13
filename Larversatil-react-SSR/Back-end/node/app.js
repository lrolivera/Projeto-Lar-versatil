const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongo = require('mongodb').MongoClient
const cors = require('cors')

function connection(banco){
    mongo.connect('mongodb://localhost/larversatil', {
        useNewUrlParser: true , 
        useUnifiedTopology: true,
    },
        banco
    )
}

app.use(express.json())
app.use(cors())

// Build fazendo sua renderizaçao, otimizando na porta 3333
app.use(express.static('./build'))

// Models
require('./models/Produtos')
const produtos = mongoose.model('produtos')

require('./models/Comentarios')
const comen = mongoose.model('comentarios')


// Conectando o banco
require('./connection')

app.get("/produtos", async (req, res)=>{
    const produtosResponse = await produtos.find();
    const produtosJson = await produtosResponse;

    return res.json(produtosJson)
})

app.post('/comentarios', async (req, res, next)=>{
    const comentarios = {
        nome: req.body.nome,
        msg: req.body.msg,
    }

   connection(
       (error, result)=> {
           result.db('larversatil').collection("comentarios").insert(comentarios, (error, comentarios)=>{
            res.json({mensagem: 'Inserido com sucesso'})
           })
       }
   )
    
})


app.listen(3333, ()=>{
    console.log('Rodando na porta 3333')
})