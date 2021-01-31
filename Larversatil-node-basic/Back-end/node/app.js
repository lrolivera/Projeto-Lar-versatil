const express = require ('express')
const app = express()

const cors = require("cors") 


const mysql = require('mysql')
const conexao = mysql.createConnection({
      host : 'localhost',
      user  : 'root',
      password : '',
      database : 'larversatil'
})

conexao.connect(console.log('Conectado ao banco'))

app.use(cors())

   
app.get('/produtos', (req, res)  => {
        conexao.query('select * from Produtos', (err, row) => {
            res.json(row)
        })
})


app.post('/contatos', (req, res, next)  => {
    let Dados = {
        nome : req.params.nome,
        msg	:   req.params.msg
    }
    conexao.query('INSERT INTO comentarios SET?', Dados, (err, row) => {
        res.json(row)
    })
})



app.use(express.static('public'))



app.listen(1910, () => {
    console.log("servidor ok!")
})