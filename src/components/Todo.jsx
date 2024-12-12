import React, { useState } from "react";

export const Todo = ({ todo, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(todo.title);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleChange = (e) => {
      const value = e.target.value;
      setNewValue(value);
    };

    const handleClickUpdateTodo = () => {
      onUpdate(todo.id, newValue);
      setIsEdit(false);
    };

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClickUpdateTodo}>
          Update
        </button>
      </form>
    );
  };

  const TodoElement = () => {
    return (
      <div className="todoInfo">
        {todo.title} <button onClick={() => setIsEdit(true)}>Editar</button>
        <button onClick={(e) => onDelete(todo.id)}>Eliminar</button>
      </div>
    );
  };

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
};
