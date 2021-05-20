import React, {useState, useEffect } from 'react';
import { authConfig, db } from './auth/config';
import firebase from 'firebase';
import TodoListItem from './components/Todo/Todo';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCheck } from '@fortawesome/free-solid-svg-icons';

//const check = <FontAwesomeIcon icon={faCheck} size="2x" color="green"/>
//const nocheck = <FontAwesomeIcon icon={faCheck} size="2x" color="red"/>

function TodoListArea() {

  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  // CARREGAR TODAS TAREFAS AO CARREGAR A PAGINA
  useEffect(() => {
    getTodos();
  }, []); // blank to run only on first launch

  
  // TRAZER TODAS TAREFAS DO FIREBASE
  function getTodos() {

    const query = db.collection('todos').where('uid','==', authConfig.auth().currentUser.uid)

    query.onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  //ADICIONAR TAREFA AO FIREBASE
  function addTodo(e) {
    e.preventDefault();

    //teste
    //console.log(todoInput);
    
    //adicionar a coleção todos
    db.collection('todos').add({
      uid: authConfig.auth().currentUser.uid,
      inprogress: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput
    })

    //zerar o estado
    setTodoInput("");

  }

  return (
      <div className="App-ContainerArea">
         <div className="title">
                / Todo list
          </div>
          <br></br>
          <div style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}>
          {todos.map((todo) => (
            <TodoListItem
              todo={todo.todo}
              inprogress={todo.inprogress}
              id={todo.id}
            />
          ))}
          </div>

          <br></br>
          <form onSubmit={addTodo}>
            <div className="AppContainerWriteTodo">
                  <div className="form-floating mb-3 AppContainerWriteTodo1">
                    <input 
                      name='todoInput' 
                      type='text' 
                      className="form-control" 
                      required
                      placeholder='Digite a nova tarefa' 
                      value={todoInput}
                      onChange={(e) => setTodoInput(e.target.value)}
                    />
                    <label htmlFor='todowrite'>Nova Tarefa</label>
                  </div>

                  <div className="gap-2 AppContainerWriteTodo2">
                      <button type="submit" className="btn btn-primary">Salvar</button>
                  </div>
              
              {/* <Footer/>  */}
              </div>
            </form>
      </div> 
               
  );
}
export default TodoListArea;