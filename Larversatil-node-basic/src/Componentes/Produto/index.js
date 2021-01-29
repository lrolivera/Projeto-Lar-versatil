import '../../Paginas/Produtos/Produtos.css';


export default function Produto(props) {

    return (
        <figure className={props.categorias + " produto col-lg-3 col-md-4 col-sm-6 col-xs-12 mr-auto"} >
            
            <figcaption>
                <p className="descricao">
                    {props.descricao}
                </p>
                <p className="preco">
                    R$ {props.preco}
                </p>
                <p className="precofinal">
                    R$ {props.precofinal}
                </p>
            </figcaption>
        </figure> 
    )
}