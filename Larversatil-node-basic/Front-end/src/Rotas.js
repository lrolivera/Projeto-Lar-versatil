import { Switch, Route } from 'react-router-dom';

import Home from './Paginas/Home/Home';
import Lojas from './Paginas/Lojas/Lojas';
import Contatos from './Paginas/Contato/Contatos';
import Produtos from './Paginas/Produtos/Produtos';
import Relatorio from './Paginas/Resposta/Relatorio'

function Rotas() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/produtos" component={Produtos}/>
            <Route exact path="/lojas" component={Lojas}/>
            <Route exact path="/contatos" component={Contatos}/>
            <Route exact patch="/relatorio" component={Relatorio}/>
        </Switch>

    );
}

export default Rotas;