import '../../Paginas/Produtos/Produtos.css';


export default function Produto(props) {

    return (
        <figure className={props.categorias + " produto col-lg-3 col-md-4 col-sm-6 col-xs-12 mr-auto"} >
            <img src={require(`./img/${props.dados.nomeimg}`).default} alt="Imagem de Produtos"/>
            
            <figcaption>
                <p className="descricao">
                    {props.dados.nomeprodutos}
                </p>
                <p className="preco">
                    R$ {props.dados.preco}
                </p>
                <p className="precofinal">
                    R$ {props.dados.precofinal}
                </p>
            </figcaption>
        </figure> 
    )
}