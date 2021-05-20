import React, { useCallback, useContext } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { authConfig } from './auth/config';
import { AuthContext } from './auth/AuthContext'

import './App.css';
import Logo from "./components/Logo/index"
//import FormLogin from './components/Form/FormLogin';

export const Logar = withRouter((props) => {
    
    const { history } = props;

    const LoginUser = useCallback(
        async (event) => {
            event.preventDefault();

            const { email, senha } = event.target.elements;

            //alert(senha.value);

            try {
                await authConfig
                .auth()
                .signInWithEmailAndPassword(email.value, senha.value);

                history.push('/');

            } catch (error) {
                console.log('Erro: ', error.code)

                if(error.code === 'auth/user-not-found') {
                    alert('Usuário não encontrado')
                }

                if(error.code === 'auth/wrong-password') {
                    alert('Senha incorreta')
                }
            }
        },
        [history],
    );

    const { usuario } = useContext(AuthContext);

    if (usuario) {
        return <Redirect to="/"/>
    }

    return (
        <div className="App-Container">
            <Logo/>
            <div className="App-ContainerForm">
                <label className="App-FormText">
                    Login<br></br>
                </label>
                <br></br>
                <br></br>
                <form onSubmit={LoginUser}>

                    <div className="form-floating mb-3">
                        <input type="email" name="email" className="form-control" placeholder="Digite seu email" required/>
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" name="senha" className="form-control" placeholder="Digite sua senha" required/>
                        <label htmlFor="senha">Senha</label>
                    </div>

                    <div className="d-grid gap-2">
                        <button type='submit' className="btn btn-primary">ACESSAR</button>
                    </div>
                    
                    {/* <input id="email" type="email" placeholder="Digite seu email" text="E-mail"/>
                    
                    <input id="senha" type="password" placeholder="Digite uma senha" text="Senha"/>
                
                    <button type="submit" text="ACESSAR"/> */}
                    
                </form>

                <br></br>

                <label className="App-FormText">
                <Link to="/cadastrar">Não tenho cadastro</Link>
                <br></br>
                </label>
                
            </div>

                
        </div>
    )
})

export default Logar