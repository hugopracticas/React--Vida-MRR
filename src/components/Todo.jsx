import { useState } from "react";

export const Todo = ({ task, updateValue, deleteTask }) => {
  const [isEdit, setIsEdit] = useState(false);

  const onDeleteTask = () => {
    deleteTask(task.id)
  }
  
  const EditForm = () => {
    const [updateVale, setUpdateValue] = useState(task.name);

    const onHandleChange = (e) => {
      const value = e.target.value;
      setUpdateValue(value);
    };

    const onUpdateValue = () => {
      updateValue(task.id, updateVale);
      setIsEdit(false);
    };

    const onFacke = () => {
      console.log("");
    };

    return (
      <div>
        <form>
          <input type="text" value={updateVale} onChange={onHandleChange} />
          <input type="button" value="Update Task" onClick={onUpdateValue} />
        </form>
      </div>
    );
  };
  return (
    <div>
      {isEdit ? (
        <EditForm />
      ) : (
        <div>
          {task.name}
          <button onClick={onDeleteTask}>Delete</button>
          <button onClick={() => setIsEdit(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};
