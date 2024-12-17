import { useState } from "react";
import { Todo } from "./Todo";

export const TodoList = () => {
  const [task, setTask] = useState("");
  const [repeat, setRepeat] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const handleChangeValue = (e) => {
    const value = e.target.value;
    setTask(value);
  };

  const handleonSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      name: task,
      complete: false,
    };
    setTaskList([...taskList, newTask]);
    setTask("");
  };

  const updateValue = (id, value) => {
    const newTaskList = [...taskList];
    const findValue = newTaskList.find((task) => task.id === id);
    findValue.name = value;
    setTaskList(newTaskList);
    console.log(taskList);
  };

  const deleteTask = (id) => {
    const newTaskList = [...taskList];
    const filterTask = newTaskList.filter((task) => task.id !== id);
    setTaskList(filterTask)
  }

  return (
    <div>
      <form onSubmit={handleonSubmit}>
        <input type="text" onChange={handleChangeValue} value={task} />
        <input type="button" value="New Task" onClick={handleonSubmit} />
      </form>
      <div>
        {taskList.map((task) => (
          <Todo key={task.id} task={task} updateValue={updateValue} deleteTask={deleteTask}/>
        ))}
      </div>
    </div>
  );
};

//l v 8:30 a 2 - 3 a 6

//300;
