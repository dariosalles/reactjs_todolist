import React, { useCallback } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { authConfig } from './auth/config';
// import Input from './components/Input'
// import Button from './components/Button'

import './App.css';
import Logo from "./components/Logo/index"
// import Form from './components/Form/Form.js';

export const Cadastrar = withRouter((props) => {
    const { history } = props;

    const cadastroUser = useCallback(
        async (event) => {
            event.preventDefault();

            const { nome, email, senha, confirmasenha } = event.target.elements;

            //alert(email.value)

            // verifica as senhas
            if(senha.value !== confirmasenha.value) {
                alert('Senhas não coinscidem')
            }

            try {
                await authConfig
                .auth()                
                .createUserWithEmailAndPassword(email.value, senha.value).then(() => {

                    var user = authConfig.auth().currentUser;

                    user.updateProfile({
                        
                        displayName: nome.value
                    
                    }).then(function() {
                        console.log("Nome Updated");
                        history.push('/');
                        //console.log(user.displayName);
                    }).catch(function(error) {
                        console.log("Erro ao atualizar o Nome");
                    });
                    
                })

                

            } catch (error) {
                console.log(error)

                if(error.code==='auth/invalid-email'){
                    alert('E-mail inválido')
                }

                if(error.code==='auth/email-already-in-use') {
                    alert('Já existe um usuário com este email')
                }
            }
        },
        [history],
    );

    return (
        <div className="App-Container">
            <Logo/>

            <div className="App-ContainerForm">
                <label className="App-FormText">
                Faça Seu cadastro<br></br>
                </label>
                <br></br>
                <br></br>
                <form onSubmit={cadastroUser}>

                <div className="form-floating mb-3">
                    <input name="nome" type="text" className="form-control" placeholder="Digite seu nome" required/>
                    <label htmlFor="nome">Nome</label>
                </div>

                <div className="form-floating mb-3">
                    <input name="email" type="email" className="form-control" placeholder="Digite seu email" required/>
                    <label htmlFor="nome">Email</label>
                </div>

                <div className="form-floating mb-3">
                    <input name="senha" type="password" className="form-control" placeholder="Digite sua senha" required/>
                    <label htmlFor="nome">Senha</label>
                </div>

                <div className="form-floating mb-3">
                    <input name="confirmasenha" type="password" className="form-control" placeholder="Confirme sua senha" required/>
                    <label htmlFor="nome">Confirma Senha</label>
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">CADASTRAR</button>
                </div>

                </form>
                <br></br>
                <label className="App-FormText">
                <Link to="/login">Já tenho cadastro, fazer Login</Link>
                <br></br>
                </label>
            </div>
            
        </div>
    )
})