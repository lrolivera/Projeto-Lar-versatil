const mongoose = require('mongoose')


function connection(){
    mongoose
    .connect('mongodb://localhost/larversatil', {
        useNewUrlParser: true , 
        useUnifiedTopology: true,
    })


    .then(()=>{
        console.log("Conectado com o banco")
    })

    .catch((error)=>{
        console.log(`Não foi possível conectar ao banco ${error}`)
    })

}


module.exports = connection()