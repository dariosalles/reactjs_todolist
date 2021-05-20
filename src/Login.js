import './App.css' 
import Logo from "./components/Logo/index"
import FormLogin from './components/Login/index';

function Login() {
    return (
        <div className="App-Container">
          <Logo/>
          <FormLogin />
        </div>           
    );
  }
  export default Login;