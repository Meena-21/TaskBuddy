import { useEffect, useState } from "react";
import Progresstracker from "./components/Progresstracker";
import Taskform from "./components/Taskform";
import Tasklist from "./components/Tasklist";
import "./Style.css";

export default function App() {

  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }

  const clearTasks = () => {
    setTasks([]);
  }
  return(
    <div>
      <h1>FocusForward</h1>
      <p>“Keep your eyes forward, always.”</p>
      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks}
      updateTask = {updateTask} deleteTask={deleteTask}/>
      <Progresstracker tasks = {tasks}/>
      <button className="clear" onClick={clearTasks}>Clear All Tasks</button>
    </div>
  )
}
