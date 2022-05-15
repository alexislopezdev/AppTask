import React, { useState } from "react";

function Task() {
  const [task, setTask] = useState("");
  const [addtask, setAddtask] = useState([]);

  const newTask = (e) => {
    setTask(e.target.value);
  };

  const addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: 123,
      nombre: task,
    };
    if (task === "") {
      alert("Add Task");
    } else setAddtask([...addtask, newTask]);
  };

  return (
    <div className="Task-Container">
      <h1 className="Title-App">App Task</h1>
      <form onSubmit={addNewTask} on className="Task-Inputs">
        <input
          onChange={(e) => newTask(e)}
          type="text"
          placeholder="Add Task"
        ></input>
        <input
          className="input-submit"
          type="submit"
          value="Create task"
        ></input>
      </form>
      <div className="container-task">
        {addtask.map((item) => (
          <div className="item-task">
            <p>{item.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
