import React from 'react'
import{useState} from 'react'

export default function Taskform({addTask}) {
    const [task, setTask] = useState('')
    const[priority,setPriority]= useState('Medium')
    const [catogory,setCatogory]=useState('College')
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTask({text:task,priority,catogory,completed:false})

        //reset
        setTask('');
        setPriority("Medium")
        setCatogory("College")
    }
  return (
   <form  value={task} onSubmit={handleSubmit}  className='task-form' >
    <div id='inp'> 
        <input type='text' placeholder='Enter Task'
        onChange={(e)=>setTask(e.target.value)}></input>
        <span>
            <button type='submit'>Add Task </button>
        </span>


    </div>
    <div>
        <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
            <option value='High'>High</option>
            <option value='Medium'>Medium</option>
            <option value='Low'>Low</option>
        </select>

        <select value={catogory } onChange={(e)=>setCatogory(e.target.value)}>
            <option value='College'>College</option> 
            <option value='Skills'>Skills</option>
            <option value='Personal'>Personal</option>
        </select>
    </div>

   </form>
  )
}
