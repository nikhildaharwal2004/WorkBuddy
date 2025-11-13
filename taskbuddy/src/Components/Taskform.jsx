import React from 'react'
import { useState } from 'react'

export default function Taskform({addTask}) {
    const[task, setTask] = useState(' ');
    const[priority, setPriority] = useState('Medium');
    const[category, setCategory] = useState('General');

    const handleSubmit = (e) => {
    e.preventDefault();
    addTask({text: task, priority: priority, category: category, completed: false});

    // Reset State
    setTask('');
    setPriority('Medium');
    setCategory('General'); 
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className="task-form">
        <div id='inp'>
          <input type="text" placeholder='Enter Your task'
          onChange={(e) => setTask(e.target.value)} value={task}/>
          <button type='submit'>Add Task</button>
        </div>

        <div id='btns'>
          <select onChange={(e) => setPriority(e.target.value)} value={priority}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
          </select>

          <select onChange={(e) => setCategory(e.target.value)} value={category}>
              <option value="General">General</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
          </select>
        </div>
      </form>
    </div>
  )
}
