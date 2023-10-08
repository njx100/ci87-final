import AddTodo from "../AddTodo";
import Todo from "../Todo";
import { useState, useEffect } from "react";
import "./style.css";
import { Button } from "antd";
import { AiOutlineDelete } from "react-icons/ai";

const TodoList = ({
  todos: todosProps,
  addTodo,
  updateStatus,
  deleteTodo,
  deleteAll,
}) => {
  const [todos, setTodos] = useState(todosProps);
  const [filter, setFilter] = useState("all");

  const handleFilter = (option) => {
    switch (option) {
      case "all":
        setTodos(todosProps);
        setFilter("all");
        break;
      case "active":
        setTodos(todosProps.filter((todo) => todo.isCompleted === false));
        setFilter("active");
        break;
      case "completed":
        setTodos(todosProps.filter((todo) => todo.isCompleted === true));
        setFilter("completed");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setTodos(todosProps);
  }, [todosProps]);

  return (
    <div className="todo-list">
      <div className="todo-filter">
        <button className="active" onClick={() => handleFilter("all")}>
          All
        </button>
        <button onClick={() => handleFilter("active")}>Active</button>
        <button onClick={() => handleFilter("completed")}>Completed</button>
      </div>
      <AddTodo addTodo={addTodo} />
      {todos.map(({ id, task, isCompleted }) => (
        <Todo
          key={id}
          id={id}
          task={task}
          isCompleted={isCompleted}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
        />
      ))}
      <Button className="del-all-btn" onClick={() => deleteAll()}>
        <AiOutlineDelete />
        <div> Delete All</div>
      </Button>
    </div>
  );
};

export default TodoList;
