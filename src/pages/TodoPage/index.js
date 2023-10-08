import TodoList from "../../components/TodoList";
import { useState, useEffect } from "react";
import "./style.css";
const TODOS = [{ id: "1", task: "Go jogging", isCompleted: false }];

const TodoPage = () => {
  //   const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  const [todos, setTodos] = useState(TODOS);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    console.log(todos);
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
    console.log(todos);
    // localStorage.setItem("todos", JSON.stringify(newStatus));
  };

  const deleteTodo = (id) => {
    const newTodoList = todos.filter((todo) => {
      if (todo.id !== id) return todo;
      return false;
    });
    setTodos(newTodoList);
    console.log(todos);
  };

  const deleteAll = () => {
    setTodos([]);
  };

  //   useEffect(() => {
  //     //   setTodos(JSON.parse(localStorage.getItem("todos")));
  //     setTodos(todos);
  //   }, []);

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
