import React from 'react'

export default function Progress({tasks}) {
  const completedTask= tasks.filter((t)=>t.completed).length
  const totaltasks=tasks.length
  const percentage = totaltasks==0?0:(completedTask/totaltasks)*100

  
  return (
    <div className='progress-tracker'>
      <p>
        {completedTask} out of {totaltasks} completed
      </p>
      <div className='progress-bar'>
        <div className='progress'
        style={{width:`${percentage}%`}}>
          

        </div>

      </div>
        
    </div>
  )
}
