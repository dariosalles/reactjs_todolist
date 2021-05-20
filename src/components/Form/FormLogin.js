import Input from '../Input'
import Button from '../Button'

import { Link } from 'react-router-dom'

function FormLogin(props) {
  return (
    <div className="App-ContainerForm">
        <label className="App-FormText">
            Login<br></br>
        </label>
        <br></br>
        <br></br>
        <form onSubmit={props.acao}>
            
            
            <Input id="email" type="email" placeholder="Digite seu email" text="E-mail"/>
            
            <Input id="senha" type="password" placeholder="Digite uma senha" text="Senha"/>
           
            <Button type="submit" text="ACESSAR"/>
            
        </form>

        <br></br>

        <label className="App-FormText">
        <Link to="/cadastrar">Não tenho cadastro</Link>
        <br></br>
        </label>
        
    </div>
  );
}

export default FormLogin;