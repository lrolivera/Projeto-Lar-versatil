import {useState} from 'react';
import {Form, FormGroup, Button, Container, FormControl } from 'react-bootstrap';

import './Contatos.css'

export default function Contato() {
    const [ form, setForm ] = useState({
    });

    const controleMudanca = ({target}) => {
        const {name, value} =target
        setForm({
            ...form,
            [name]: value
        })
    }


    const controleEnvio = async (evento) => {
        evento.preventDefault();

        const json = JSON.stringify(form);

        const opcoes = {
            method: 'POST',
            headers: { 'Content-type': 'application/json', "Acess-Control-Allow-Origin": "*" },
            body: json
        }

        const resposta = await  fetch("http://localhost:3333/comentarios",
        opcoes);
        const dados = await resposta.json()
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
