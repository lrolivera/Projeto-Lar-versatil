import { useState, useEffect } from 'react';

import Produto from '../../Componentes/Produto'
import { Container, Row } from "react-bootstrap"

export default function Produtos() {
    const [ produtos, setProdutos ] = useState([]);
    
    useEffect(async () => {
        const resposta = await fetch("http://localhost/conexao/Produtos.php")
        const dados = await resposta.json()
        setProdutos(dados);
    }, []);

    return (
        <Container>
            <Row>
                {produtos && produtos.map(item => <Produto categoria={item.idprodutos} descricao={item.nomeprodutos} preco={item.preco} precofinal={item.precofinal} 
                imagem={item.nomeimg} />)}
            </Row>
        </Container>  
    )
}
