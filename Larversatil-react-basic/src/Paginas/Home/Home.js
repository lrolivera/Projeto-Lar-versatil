import {  Container, Row, Carousel } from 'react-bootstrap';
import imgone from '../../Componentes/Produto/img/cartaz.jpeg';
import imgtwo from '../../Componentes/Produto/img/cartaz.jpeg';
import imgThree from '../../Componentes/Produto/img/cartaz.jpeg';

export default function Home()  {
    return (
        <Container> 
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Seja bem vindo(a)!</h1>
                    <p class="lead"> A loja de eletrdomesticos, que sempre te dá <em> desconto<b>s</b></em> !</p>
                </div>
            </div>
            <Row className="my-5">
                
            </Row>
            <Carousel className="mb-5">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imgone}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imgtwo}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imgThree}
                    />
                </Carousel.Item>
            </Carousel>
        </Container>

    );
}