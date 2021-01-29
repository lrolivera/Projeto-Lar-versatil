const express = require ('express')
const app = express()

const mysql = require('mysql')
const conexao = mysql.createConnection({
      host : 'localhost',
      user  : 'root',
      password : '',
      database : 'larversatil'
})

conexao.connect(console.log('Conectado ao banco'))
   
app.get('/produtos', (req, res)  => {
        conexao.query('select * from Produtos', (err, row) => {
            res.json(row)
        })
})

app.use(express.static('public'))

app.listen(4000, () => {
    console.log("servidor ok!")
})