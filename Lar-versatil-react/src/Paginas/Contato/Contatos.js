import {Form, FormGroup, Button, Container, FormControl } from 'react-bootstrap';

import './Contatos.css';


export default function Contatos() {
    return (

        <Container>
            <div className = "contatos" >
                <div  className="contato" >
                <img src={require('../../Componentes/Produto/img/logoemail.png').default} />
                    <p>Contato@larversatil.com</p>
                </div>

                <div className= "contato" >
                    <img src={require('../../Componentes/Produto/img/logowhatsapp.jpg').default} />
                    <p>(11) 99999 - 9999</p>
                </div>
                
            </div>
            



            <Form   className="p-3 mb-4 bg-warning text-dark" >
                <FormGroup className="Form" >
                    <h4 id="comentario">Deixe sua sugestão aqui ;)</h4>
                    <Form.Label for="">Nome:</Form.Label>
                    <FormControl type="text" className="form-control" name="nome"  placeholder="Seu nome"/>
                </FormGroup>
                <FormGroup className="Form">
                    <Form.Label >Mensagem:</Form.Label>
                    <FormControl type="text" className="form-control" name="msg"  placeholder="Escreva sua Mensagem"/>
                </FormGroup>
                <Button type="submit" className="btn btn-dark">Enviar</Button>
            </Form>
        

        </Container>
    )
}
