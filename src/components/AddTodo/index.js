import { Button, Input } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    const newTask = {
      id: uuidv4(),
      task: text,
      isCompleted: false,
    };
    addTodo(newTask);
  };

  return (
    <div className="add-todo">
      <Input
        type="text"
        placeholder="add details"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <Button className="btn" type="primary" onClick={() => handleAdd()}>
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
