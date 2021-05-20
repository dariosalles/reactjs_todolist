import Input from '../Input'
import Button from '../Button'

import { Link } from 'react-router-dom'

function Form(props) {
  return (
    <div className="App-ContainerForm">
        <label className="App-FormText">
            Faça Seu cadastro<br></br>
        </label>
        <br></br>
        <br></br>
        <form onSubmit={props.acao}>
            <Input id="nome" type="text" placeholder="Digite seu nome" text="Nome"/>
            
            <Input id="email" type="email" placeholder="Digite seu email" text="E-mail"/>
            
            <Input id="senha" type="password" placeholder="Digite uma senha" text="Senha"/>
            
            <Input id="confirmasenha" type="password" placeholder="Confirme sua senha" text="Confirma Senha"/>
           
            <Button type="submit" text="CADASTRAR"/>
            
        </form>
        <br></br>
        <label className="App-FormText">
          <Link to="/login">Já possuo Cadastro</Link>
        </label><br></br>
    </div>
  );
}

export default Form;