import { useState } from "react";

export const Task = ({ task, updateValue, deleteTask }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(task.createNewTask);

    const handleChangeValue = (e) => {
      const value = e.target.value;
      setNewValue(value);
    };

    const handleOnSubmit = (e) => {
      e.preventDefault();
      updateValue(task.id, newValue);
      setIsEdit(false);
    };

    return (
      <div>
        <form>
          <input type="text" onChange={handleChangeValue} value={newValue} />
          <input type="submit" value="Update" onClick={handleOnSubmit} />
        </form>
      </div>
    );
  };

  return (
    <div>
      {isEdit ? (
        <FormEdit />
      ) : (
        <div>
          <div>{task.createNewTask}</div>
          <button onClick={() => setIsEdit(true)}>Edit</button>
          <button onClick={handleDeleteTask}>Delete</button>
        </div>
      )}
    </div>
  );
};
