import { HashRouter, Switch, Route } from "react-router-dom";
import React from "react";

import Home from './views/home';
import CadastroProduto from './views/produtos/cadastro';
import ConsultaProdutos from "./views/produtos/consulta";

export default () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact={true} path="/cadastro" component={CadastroProduto}/>
                <Route exact={true} path="/" component={Home}/>
                <Route exact={true} path="/consulta" component={ConsultaProdutos}/>
            </Switch>
        </HashRouter>
    )
}