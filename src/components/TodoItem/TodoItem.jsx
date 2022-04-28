import React from "react";
import "./TodoItem.css";

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <p className={`TodoItem-p ${props.completed && 'TodoItem__p--complete'}`}>
        {props.text}
      </p>
      <span 
      className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        X
      </span>
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}'`}
        onClick={props.onComplete}
      >
          √
      </span>
    </li>
  );
}

export { TodoItem };
