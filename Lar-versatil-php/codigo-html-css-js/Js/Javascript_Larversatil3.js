

// Filtro
function exibir_categoria (categoria) {

    let elementos = document.getElementsByClassName ('selecaodeprodutos');
    console.log(elementos);
    for(let i = 0; i<elementos.length; i++){
        console.log(elementos[i].id);
        if (categoria == elementos [i].id)
        elementos[i].style = "display:block";

        else
        elementos[i].style = "display:none";

    }
}

let exibir_todos = () => {
    let elementos = document.getElementsByClassName ('selecaodeprodutos');

    for (var i=0; i<elementos.length; i++) {
        elementos[i].style = "display:block";
    }
};

//fim de Filtro


//click 

var boxprodutos = document.querySelectorAll('.selecaodeprodutos')

for (i=0; i < boxprodutos.length; i++) {
    boxprodutos[i].addEventListener('click', function (){

       if (this.classList == 'selecaodeprodutos') {
        this.classList.remove('selecaodeprodutos')
        this.classList.add('produtogrande')

       } else {
        this.classList.remove('produtogrande')
        this.classList.add('selecaodeprodutos')

       }
        
    })
        
    
}
//fim do click 
