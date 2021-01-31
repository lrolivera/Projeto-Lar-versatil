import { useState, useEffect } from 'react';

import Produto from '../../Componentes/card/Eletro'
import { Container, Row } from "react-bootstrap"

export default function Produtos() {
    const [ produtos, setProdutos ] = useState([]);
    
    useEffect(async () => {
        const resposta = await fetch("http://localhost:1910/produtos")
        const dados = await resposta.json()
        setProdutos(dados);
    }, []);
    return (
        <Container>
            <Row>
            {produtos && produtos.map(item => <Produto dados={item} />)}
            </Row>
            {console.log(produtos)}
        </Container>  
    )
}
