import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Menu.css';


function BaseMenu(props) {
    const { location } = props
    return(
        <Navbar className="navbar navbar-light" bg="warning" expand="lg" fixed="top">
            <Navbar.Brand>
            <Nav.Link as={Link} href="/" to="/">
                <img className="logo" src={require(`../card/img/logo.png`).default} />
            </Nav.Link>   
            </Navbar.Brand> 
            <Navbar.Toggle aria-controls="itemMenu"/>
            <Navbar.Collapse id="itemMenu ">
                <Nav activeKey={location.pathname} className="ml-auto mr-3">
                    <Nav.Item>
                        <Nav.Link className="titulo" as={Link} href="/" to="/"> Página inicial </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="titulo" as={Link} href="/produtos" to="/produtos"> Produtos </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="titulo" as={Link} href="/lojas" to="/lojas"> Nossas Lojas </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="titulo" as={Link} href="/contatos" to="/contatos"> Contato </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu);

export default Menu;