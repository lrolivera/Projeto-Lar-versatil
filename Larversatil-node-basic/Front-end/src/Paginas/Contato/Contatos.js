import {Form, FormGroup, Button, Container, FormControl } from 'react-bootstrap';
import { useState } from 'react';

import './Contatos.css';


export default function Contatos() {
    const [form, setForm ] = useState({
        nome: "", 
        msg: "",
    })


    const controleMudanca = (evento) => {
        setForm({
            ...form,
            [evento.target.id]: evento.target.value
        })
    }
    
    const controleEnvio = async (evento) => {
        evento.preventDefault();

        const url = "http://localhost/conexao/Contatos.php";

        const dados = new FormData(evento.target);

        const opcoes = {
            method: "POST",
            body: dados,
        }

        const resposta = await fetch(url, opcoes);
        const resultado = await resposta.json();

        if (resultado.mensagem === "Metodo POST Efetuado"){      
            alert('Mensagem enviada com sucesso!');
        }

    }

    return (

        <Container>
            <div className = "contatos" >
                <div  className="contato" >
                <img src={require('../../Componentes/card/img/logoemail.png').default} />
                    <p>Contato@larversatil.com</p>
                </div>

                <div className= "contato" >
                    <img src={require('../../Componentes/card/img/logowhatsapp.jpg').default} />
                    <p>(11) 99999 - 9999</p>
                </div>
                
            </div>
            



            <Form   className="p-3 mb-4 bg-warning text-dark"  onSubmit={controleEnvio}>
                <FormGroup className="Form" >
                    <h4 id="comentario">Deixe sua sugestão aqui ;)</h4>
                    <Form.Label for="">Nome:</Form.Label>
                    <FormControl type="text" className="form-control" name="nome" onChange={controleMudanca} placeholder="Seu nome"/>
                </FormGroup>
                <FormGroup className="Form">
                    <Form.Label >Mensagem:</Form.Label>
                    <FormControl type="text" className="form-control" name="msg" onChange={controleMudanca} placeholder="Escreva sua Mensagem"/>
                </FormGroup>
                <Button type="submit" className="btn btn-dark">Enviar</Button>
                <h5  className="relatorio p-3 mb-2 bg-warning text-dark" > <a href="/Relatorio"> Relatório </a> </h5>
            </Form>
        

        </Container>
    )
}
