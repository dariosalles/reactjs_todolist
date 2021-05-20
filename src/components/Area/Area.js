import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPortrait } from '@fortawesome/free-solid-svg-icons';
import { authConfig }  from '../../auth/config';
import './style.css';
import { useCallback} from 'react';

import Modal from '../Modal/index'
import { Link } from 'react-router-dom';

const Area = (props) => {

    const { history } = props;

    const changePhoto = <FontAwesomeIcon icon={faPortrait} size="5x" color="gray"/>
    const photoUrl = authConfig.auth().currentUser.photoURL;

    const nomeStorage = authConfig.auth().currentUser.displayName;
    const emailStorage = authConfig.auth().currentUser.email;

        // ATUALIZAR PROFILE PICTURE
        
    
        // ATUALIZAR USUÁRIO - USER UPDATE
        const changeUser = useCallback(

            async(event) => {
                event.preventDefault();
    
                const { nome, email, senha, confirmasenha } = event.target.elements;

                //verifica se as senhas coinscidem
                if(senha.value !== confirmasenha.value){
                    
                    //alert('Senhas não coinscidem')
                   
                    return null
                }
                
                var user = authConfig.auth().currentUser;

                try{

                    //atualiza os dados padrões

                    await user.updateProfile({

                        displayName: nome.value,
                        email: email.value,
                        photoURL: 'https://firebasestorage.googleapis.com/v0/b/rstcomteste.appspot.com/o/7hrPeJGHJmdibmdW1qI8tdVUjNv2%2FprofilePicture%2Fcultivo-protegido-estufa-imgrower-e1473362563573.jpg?alt=media&token=46205df1-2588-423b-9a66-de301a979b44'


                    }).then(function() {
                        // Dados padrões atualizados
                        console.log('Dados padrões atualizados');

                        //atualiza a senha
                        authConfig.auth().currentUser.updatePassword(senha.value)
                        console.log('Senha atualizada');
                        alert('Dados atualizados com sucesso')
                        

                        //logoff por segurança
                        //authConfig.auth().signOut();
                        history.push('/login');

                    }, function(error) {
                        console.log('Erro: ', error)
                    }); 



                }
                catch(error) {

                }
            }, [history]

                
        )
           
        

    
    return(

        <div className="App-ContainerArea">
            <div className="title">
                / Dados Pessoais</div>
                <br></br>
                
            <div className="photo">
                {photoUrl ?  <img src={photoUrl} className='photo' alt='Avatar'></img> : changePhoto} 
                    <br></br>
                <Link to='/changePhoto'>Alterar Foto</Link>
            </div>

            <br></br>

            <div>
                <form onSubmit={changeUser}>
                    <div className="form-floating mb-3">
                        <input defaultValue={nomeStorage} name='nome' id='nome' type='text' className="form-control" required/>
                        <label htmlFor='nome'>Nome</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input name='email' id='email' type='text' className="form-control" defaultValue={emailStorage} required/>
                        <label htmlFor='email'>Email</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input name='senha' id='senha' type='password' className="form-control" required/>
                        <label htmlFor='senha'>Senha</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input name='confirmasenha' id='confirmasenha' type='password' className="form-control" required/>
                        <label htmlFor='confirmasenha'>Confirma Senha</label>
                    </div>

                    <div className='d-grid gap-2'>
                        <button type="submit" className="btn btn-primary">EDITAR</button>
                    </div>
                    
                </form>
            </div>

            <Modal class="modal fade" id="staticBackdrop" databsbackdrop="static" databskeyboard="false" bodymessage="Senhas não coinscidem"/>

            
                {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                </button> */}

            
            
        </div>
    )
}
export default Area
