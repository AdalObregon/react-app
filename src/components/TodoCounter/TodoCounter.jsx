import React from "react";
import {TodoContext} from '../TodoContext'
import './TodoCounter.css'

function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);

  return (
  <div>
  <h2 className = "TodoCounter">You have completed <b>{completedTodos}</b> of <b>{totalTodos}</b> tasks</h2>
  </div>
  );
}


export { TodoCounter };