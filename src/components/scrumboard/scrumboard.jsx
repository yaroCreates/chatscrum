import React, { Component } from 'react'
import './scrumboard.css'
import data from '../../static/Data'
import Tasks from '../tasks/tasks'
import AddTask from './addTask'
import Users from '../users/users'
import axios from 'axios'

export class Scrumboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Data: data,
            isOpen: false,
            tasks: []
        }
    }

    addTask = (task) => {
        task.id = Math.random().toString(36).slice(2,9)
        console.log('How task looks with id', task)
        let tasks = [...this.state.tasks, task]
        console.log('task before setting state is: ', tasks)
        this.setState({
            tasks
        })
        console.log(this.state)
    }

    deleteTask = (id) => {
        const tasks = this.state.tasks.filter((task) => {
            return task.id !== id
        })
        
        this.setState({
            tasks
        })

    }

    componentDidMount() {
        axios.get("http://liveapi.chatscrum.com/scrum/api/scrumgoals/")
            .then(res => {
                console.log(res)
                this.setState({
                    tasks: res.data
                })
            })
    }
    
  render() {
    console.log('Logged in as', data.fullname)
    console.log(data)
    return (
      <div className='scrumboard'>
        <nav>
            <h1>Chatscrum</h1>
            <div>
                <p>User type: {data.usertype}</p>
                <p>Project Name: {data.projectName}</p>
            </div>
        </nav>

        <p id="info">Hello {data.fullname}! Welcome to your scrumboard</p>

        <Tasks data={this.state.tasks} deleteTask={this.deleteTask}/>
        <AddTask addTask={this.addTask}/>
        <Users />

        
      </div>
    )
  }
}

export default Scrumboard