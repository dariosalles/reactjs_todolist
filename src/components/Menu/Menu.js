import './style.css';
import logo  from '../../components/Logo/logo_dsxweb.png';
import { authConfig }  from '../../auth/config';

import Button from '../Button/index';
import { Link } from 'react-router-dom';

const Menu = () => {
    return(
        <div className="App-ContainerMenu">
                <div className="btnSair">
                    <Button classNameDiv="gap-2" classNameBtn="btn btn-danger" onClick={() => authConfig.auth().signOut()} text='Sair'/>
                </div>
            <div className="logoMenu">
                <img src={logo} alt="Logo"></img>
                {authConfig.auth().currentUser.displayName}
                <br></br>
                {authConfig.auth().currentUser.email}
            </div>
            <br></br>
            <div className="MenuItens">
                <ul>
                    <li><Link to="/">Dados Pessoais</Link></li>
                    <li><Link to="/todolist">TodoList</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Menu