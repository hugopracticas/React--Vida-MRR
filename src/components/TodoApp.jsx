import React, { useState } from "react";
import { Todo } from "./Todo";

export const TodoApp = () => {
  const [title, setTitle] = useState("Hola");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
  };

  const handleUpdate = (id, value) => {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  };

  const handleDelete = (id) => {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
  };

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />

        {title}
      </form>

      <div className="todoContainer">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
