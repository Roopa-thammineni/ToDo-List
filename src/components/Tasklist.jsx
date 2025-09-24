import React from 'react'

export default function Tasklist({tasks,updateTask,deleteTask}) {
  const toggleComplete=(index)=>{
    const updatedTask={...tasks[index],completed: !tasks[index].completed}
    updateTask(updatedTask,index);

  }
  return (
 <ul className='task-list'>
  {
    tasks.map((task,index)=>(
      <li>
        <div>
          <span>{task.text}</span>
          <small>({task.priority},{task.catogory})</small>
        </div>
        <div>
          <button onClick={()=>toggleComplete(index)}>{task.completed?"undo":"complete"}</button>
          <button onClick={()=>deleteTask(index)}>delete</button>
        </div>
      </li>
    ))
  }
    
 </ul>
  )
}
