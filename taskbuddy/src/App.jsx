import React, { useEffect, useState } from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import ProgressTracker from './Components/ProgressTracker' 
import './style.css'


export default function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => { 
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });

  const addTask = (task) => {
     setTasks([...tasks, task]);
  }

  const updateTask = (updatedTasks, index) => {
     const newTasks = [...tasks];
     newTasks[index] = updatedTasks;
     setTasks(newTasks);
  }
  const deleteTask = (index) => {
     setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className='App'>
      <header>
        <h1 className='title'>Task<b style={{color : 'yellow'}}>Buddy</b></h1>
        <p className='tagline'>Your friendly task manager</p>
      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks} 
      updateTask = {updateTask} 
      deleteTask = {deleteTask} />
      <ProgressTracker tasks = {tasks} />
      </header>
    </div>
  )
}
