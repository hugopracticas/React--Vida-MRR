import React, { useState } from "react";
import { Task } from "./Task";

export const TodoList = () => {
  const [createNewTask, setCreateNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChangeValue = (e) => {
    const value = e.target.value;
    setCreateNewTask(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      createNewTask,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
    setCreateNewTask("");
  };

  const updateValue = (id, value) => {
    const copyList = [...taskList];
    const edithTask = copyList.find((task) => task.id === id);
    edithTask.createNewTask = value;
    setTaskList(copyList);
  };

  const deleteTask = (id) => {
    const deleteTask = [...taskList];
    const newArray = deleteTask.filter((oldTask) => oldTask.id !== id);
    setTaskList(newArray);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChangeValue} value={createNewTask} />
        <input type="submit" value="New Task" onClick={handleSubmit} />
      </form>
      <div>
        {taskList.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateValue={updateValue}
          />
        ))}
      </div>
    </div>
  );
};
