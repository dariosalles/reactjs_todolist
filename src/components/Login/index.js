import Input from '../Input'
import Button from '../Button'

import { Link } from 'react-router-dom'

function Form() {
  return (
    <div className="App-ContainerForm">
        <label className="App-FormText">
            Login<br></br>
        </label>
        <br></br>
        <br></br>
        <form>
                        
            <Input id="email" type="email" placeholder="Digite seu email" text="E-mail"/>
            <Input id="senha" type="password" placeholder="Digite uma senha" text="Senha"/>
            <Button text="ACESSAR"/>
            
        </form>
        <br></br>
        <label className="App-FormText">
          <Link to="/recovery">Esqueci a senha</Link>
        </label><br></br>
    </div>
  );
}

export default Form;