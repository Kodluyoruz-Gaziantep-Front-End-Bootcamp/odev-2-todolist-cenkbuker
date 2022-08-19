import React, { useState } from "react";
import Form from "./Components/Form.js";
import Todolist from "./Components/Todolist.js";
import { nanoid } from "nanoid";
function App() {

  const [tasks, setTasks] = useState([]);
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  const taskList = tasks.map((task) => (
    <Todolist 
    name={task.name} 
    id={task.id}
    completed={task.completed}
    key={task.id}
    deleteTask={deleteTask}
    />

  ))
  
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
    
  }
  const tasksNoun = taskList.length <= 1 ? 'Task' : 'Tasks';
  const noTask = taskList.length !== 0 ?  taskList.length : 'No'
  const headingText = `${noTask} ${tasksNoun} Remaining`;
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
      <h2 id="list-heading">{headingText}</h2>
    </div>
  );
}

export default App;
