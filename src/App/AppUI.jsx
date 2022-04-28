import React from "react";
import { TodoTitle } from "../components/TodoTitle/TodoTitle";
import { TodoContext } from "../components/TodoContext";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoForm } from "../components/TodoForm/index";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { FooterLegend } from "../components/FooterLegend/FooterLegend.jsx";
import {Modal} from '../components/Modal';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>

      <TodoTitle />
      <TodoCounter />

      <TodoSearch />
      <CreateTodoButton
            setOpenModal = {setOpenModal}
      />
      <TodoList>
        {error && <p>Desesperate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO!</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
          
        ))}
      </TodoList>
          {!!openModal && (
             <Modal>
               <TodoForm/>
            </Modal>
          )}



      {/* <FooterLegend /> */}
    </React.Fragment>
  );
}

export { AppUI };
