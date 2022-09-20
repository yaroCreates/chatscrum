import React from 'react'
import taskList from '../../static/tasks'

export default function Tasks() {
  return (
    <div className='tasker'>
        <div className="container">
            <div className="weekly-box">
                <h3>Weekly task</h3>
                {taskList.map(({id, item}, index) => (
                    <p className="task" key={id}>{item}</p>
                ))}
            </div>
            <div className="daily-box">
                <h3>Daily target</h3>
            </div>
        </div>
    </div>
  )
}
