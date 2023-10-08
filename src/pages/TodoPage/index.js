import TodoList from "../../components/TodoList";
import { useState, useEffect } from "react";
import "./style.css";
import { TODOS } from "../../utilities/todos";

const TodoPage = () => {
  //   const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  const [todos, setTodos] = useState(TODOS);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);

    // localStorage.setItem("todos", JSON.stringify(todos));
  };

  const updateStatus = (id, isCompleted) => {
    const newStatus = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !isCompleted;
      }
      return todo;
    });
    setTodos(newStatus);
    // localStorage.setItem("todos", JSON.stringify(newStatus));
  };

  const deleteTodo = (id) => {
    const newTodoList = todos.filter((todo) => {
      if (todo.id !== id) return todo;
      return false;
    });
    setTodos(newTodoList);
  };

  const deleteAll = () => {
    setTodos([]);
  };

  useEffect(() => {
    //   setTodos(JSON.parse(localStorage.getItem("todos")));
    setTodos(todos);
  }, [deleteTodo, updateStatus, addTodo]);

  return (
    <div className="todo-page">
      <h1>#todo</h1>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        addTodo={addTodo}
        updateStatus={updateStatus}
        deleteTodo={deleteTodo}
        deleteAll={deleteAll}
      />
    </div>
  );
};

export default TodoPage;
