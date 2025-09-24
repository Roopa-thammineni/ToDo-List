import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import Progress from './components/Progress'
import './Style.css'

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([])
  const [darkMode, setDarkMode] = useState(false);
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  })
  const addTask=(task)=>{
    setTasks([...tasks,task])
    
  }
  const updateTask=(updatedTask,index)=>{
    const newtask=[...tasks]
    newtask[index]=updatedTask;
    setTasks(newtask)


  }
  const deleteTask=(index)=>{
    setTasks(tasks.filter((_,i)=>i!=index))//first one parameter is null
    
  }
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  
 
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header>
        <h1>Task Trail</h1>
        <p>Your friendly Task Manager</p>
        <button onClick={toggleTheme} className="toggle-btn">
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <Taskform addTask={addTask} />
      <Tasklist tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <Progress tasks={tasks} />
    </div>
  );
}

export default App
