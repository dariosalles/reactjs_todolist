import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './App';
import Logar from './Logar';
import Inicio from './Inicio';
import TodoList from './TodoList';

import { AuthProvider } from './auth/AuthContext';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { RotaPrivada } from './auth/RotaPrivada'
import { Cadastrar } from './Cadastrar';
import changePhotoProfile  from './TrocaFoto';

ReactDOM.render(
<AuthProvider>
    <BrowserRouter>
        <Switch>
            <RotaPrivada exact path="/" component={Inicio} /> {/* Home */}
            <RotaPrivada path="/todolist" component={TodoList} />
            <RotaPrivada path="/changePhoto" component={changePhotoProfile}/>
            <Route path="/cadastrar" component={Cadastrar} /> {/* cadastrar */}
            <Route path="/login" component={Logar} />
        </Switch>
    </BrowserRouter>
</AuthProvider>,
document.getElementById('root'));
