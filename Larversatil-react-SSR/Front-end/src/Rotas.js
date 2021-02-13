import { Switch, Route } from 'react-router-dom';
import {lazy, Suspense} from 'react'


const  Home = lazy(() => import('./Paginas/Home/Home'));
const  Produtos = lazy(() => import('./Paginas/Produtos/Produtos'));
const  Lojas = lazy(() => import('./Paginas/Lojas/Lojas'));
const  Contatos = lazy(() => import('./Paginas/Contato/Contatos'));
const  Relatorio = lazy(() => import('./Paginas/Produtos/Produtos'));


function Rotas() {
    return (

        <Suspense fallback={<div>Carregando....</div>}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/produtos" component={Produtos}/>
                <Route exact path="/lojas" component={Lojas}/>
                <Route exact path="/contatos" component={Contatos}/>
                <Route exact patch="/relatorio" component={Relatorio}/>
            </Switch>
        </Suspense>
    );
}

export default Rotas;