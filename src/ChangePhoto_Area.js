import React from 'react';
import firebase from 'firebase';
//import { useState } from 'react';
import { authConfig } from './auth/config';

function ChangePhotoArea() {

    //const [photo, setPhoto] = useState("");

    //function changePicture() {

    //e.preventDefault();

    //Upload Profile Picture 
    //Altered code from: Firebase Youtube Channel. 

    //Get Elements
    //var uploader = document.getElementById('uploader');
    //var fileButton = document.getElementById('fileButton');

    //const input = document.querySelector('.form-control');
    //const buttonsub = document.querySelector('button');
    //const btn = document.querySelectorAll('button');
    //const log = document.getElementById('log');

    //var selectElement = document.querySelector("input");

    //selectElement.addEventListener('change', function(e){

        function changePhoto(e) {
        
        //e.preventDefault();
        
        const file = e.target.files[0];
        console.log('Arquivo: ', file);

        // Create the file metadata
        var metadata = {
            contentType: 'image/jpeg' 
        };
        
        const user = authConfig.auth().currentUser;

        // Upload file and metadata to the object 'images/mountains.jpg'
        var uploadTask = firebase.storage().ref(user.uid + '/profilePicture/' + file.name).put(file, metadata);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        
        function(snapshot) {
        
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');

            switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            default:
                console.log('default');
                break;
        }
        }, function(error) {

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
            case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;

            case 'storage/canceled':
            // User canceled the upload
            break;

            default:
            console.log("erro firebase");
            break;
        //...

            case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
        }, function() {
            

        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log('File available at', downloadURL);

                //atualiza os dados padrões

                user.updateProfile({

                    photoURL: downloadURL

                }).then(function() {
                    // Dados padrões atualizados
                    console.log('Foto do Perfil atualizado');

                }, function(error) {
                    console.log('Erro: ', error)
                }); 



            //}
            //catch(error) {

           // }


            });
        });

        


    };


    
    //input.addEventListener('change', uploadPhoto); 
    
    // function uploadPhoto(e) {

        // e.preventDefault();
        
        // const file = e.target.files[0];
        // console.log('Arquivo: ', file);

        // // Create the file metadata
        // var metadata = {
        //     contentType: 'image/jpeg' 
        // };
        
        // const user = authConfig.auth().currentUser;

        // // Upload file and metadata to the object 'images/mountains.jpg'
        // var uploadTask = firebase.storage().ref(user.uid + '/profilePicture/' + file.name).put(file, metadata);

        // Listen for state changes, errors, and completion of the upload.
        //uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        
        // function(snapshot) {
        
        //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        //     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //     console.log('Upload is ' + progress + '% done');

        //     switch (snapshot.state) {
        //     case firebase.storage.TaskState.PAUSED: // or 'paused'
        //         console.log('Upload is paused');
        //         break;
        //     case firebase.storage.TaskState.RUNNING: // or 'running'
        //         console.log('Upload is running');
        //         break;
        //     default:
        //         console.log('default');
        //         break;
        // }
        // }, function(error) {

        // // A full list of error codes is available at
        // // https://firebase.google.com/docs/storage/web/handle-errors
        // switch (error.code) {
        //     case 'storage/unauthorized':
        //     // User doesn't have permission to access the object
        //     break;

        //     case 'storage/canceled':
        //     // User canceled the upload
        //     break;

        //     default:
        //     console.log("erro firebase");
        //     break;
        // //...

        //     case 'storage/unknown':
        //     // Unknown error occurred, inspect error.serverResponse
        //     break;
        // }
        // }, function() {
            

        // // Upload completed successfully, now we can get the download URL
        // uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        //     console.log('File available at', downloadURL);

        //         //atualiza os dados padrões

        //         user.updateProfile({

        //             photoURL: downloadURL

        //         }).then(function() {
        //             // Dados padrões atualizados
        //             console.log('Foto do Perfil atualizado');

        //         }, function(error) {
        //             console.log('Erro: ', error)
        //         }); 



        //     //}
        //     //catch(error) {

        //    // }


        // });
        // });



    //}

  return (
      <div className="App-ContainerArea">
         
          <form>
            <div className="AppContainerWriteTodo">
                  <div className="form-floating mb-3 AppContainerWriteTodo1">

                  {/* <input placeholder="Enter some text" name="name"/>
                  <p id="log"></p> */}

                    <input 
                      
                      type='file' 
                      name='inputPhoto'
                      id='inputPhoto'
                      className="form-control" 
                      required
                      placeholder='Selecione a foto' 
                    //   value={photo}
                       onChange={(e) => changePhoto(e)}
                    />
                    <label htmlFor='todowrite'>Trocar foto de perfil</label>
                  </div>

                  {/*<div className="gap-2 AppContainerWriteTodo2">
                      <button type="submit" className="btn btn-primary" id='btn'>Salvar</button>
                  </div> 
              
               <Footer/>  */}
              </div>
            </form>
      </div> 
               
  );
}
export default ChangePhotoArea;