import "./App.css";
import TodoPage from "./pages/TodoPage";

function App() {
  // localStorage.setItem("todos", JSON.stringify(TODOS));

  return (
    <div className="App">
      <TodoPage />
    </div>
  );
}

export default App;
