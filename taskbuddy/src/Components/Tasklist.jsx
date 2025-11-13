import React from 'react'

export default function Tasklist({tasks, updateTask, deleteTask}) {

    const toggleComplete = (index) => {
        const updatedTasks = {...tasks[index], completed: !tasks[index].completed};
        updateTask(updatedTasks, index);
    }
  return (
   <ul className='task-list'>
      {tasks.map((task, index) => (
        <li key={index}>
            <div className='task-info'>
                <span>{task.text}</span>
                <div className='task-badge'>
                    <small>{task.priority}</small>
                    <small>{task.category}</small>
                </div>
            </div>

            <div className='task-buttons'>
                <button onClick={() => toggleComplete(index)}>{task.completed ? "Undo" : "Complete"}</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
        </li>
      ))}
   </ul>
  )
}
