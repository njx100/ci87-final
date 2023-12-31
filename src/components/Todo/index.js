import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

import "./style.css";

const Todo = ({ id, task, isCompleted, updateStatus, deleteTodo }) => {
  const [completed, setCompleted] = useState(isCompleted);

  const handleClick = () => {
    setCompleted(!completed);
    updateStatus(id, isCompleted);
  };
  const todoClassName = `todo-text ${completed && "todo-completed"}`;

  return (
    <div className="todo">
      <div className="todo-left">
        <input
          type="checkbox"
          checked={completed}
          onClick={() => handleClick()}
        />
        <div className={todoClassName}>{task}</div>
      </div>
      <button onClick={() => deleteTodo(id)}>
        <AiOutlineDelete />
      </button>
    </div>
  );
};

export default Todo;
