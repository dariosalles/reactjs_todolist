import React from 'react';

import Menu from './components/Menu/Menu';
import TodoListArea from './TodoList_Area';

const TodoList = () => {
  return (
      <div className="App-ContainerInicio">
        <Menu/>
        <TodoListArea/>
      </div>           
  );
}
export default TodoList;