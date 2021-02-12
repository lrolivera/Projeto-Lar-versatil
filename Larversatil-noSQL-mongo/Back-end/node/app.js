const express = require('express')
const app = express()
const mongoose = require('mongoose')


app.use(express.json())

// Models
require('./models/Produtos')
const produtos = mongoose.model('produtos')


// Conectando o banco
require('./connection')

app.get("/produtos", async (req, res)=>{
    const produtosResponse = await produtos.find();
    const produtosJson = await produtosResponse;

    return res.json(produtosJson)
})

// app.post('./formulario', async (req, res)=>{
//     const mensagem = new user({
//         nome: req.body.nome,
//         msg: req.body.msg,
//         senha: req.body.senha
//     })

//     mensagem.save()

//     res.json({message: 'cadastro feito com sucesso', formulario: mensagem})
    
// })


app.listen(3333, ()=>{
    console.log('Rodando')
})