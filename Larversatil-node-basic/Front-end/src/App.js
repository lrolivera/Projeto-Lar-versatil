import Menu from './Componentes/Menu/Menu';
import Rotas from './Rotas';
import Footer from './Componentes/Footer/Footer';

import { BrowserRouter } from 'react-router-dom';

import  { Container } from 'react-bootstrap';

import './App.css'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu />
        </header>
        <main>
          <Container fluid>
            <Rotas />
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
