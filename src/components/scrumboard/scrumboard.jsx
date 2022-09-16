import React, { Component } from 'react'
import './scrumboard.css'
import data from '../../static/Data'

export class Scrumboard extends Component {

    constructor() {
        super()

        this.state = {
            Data: data,
            isOpen: false,
            tasks: null
        }
    }

    openModel = () => {
        this.setState({
            isOpen: true
        })
    }
    closeModel = () => {
        this.setState({
            isOpen: false
        })
    }
    handleChange = (e) => {
        this.setState({
            tasks: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            isOpen: false
        })
    }

    state = data
    
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

        <div className="container">
            <div className="weekly-box">
                <h3>Weekly task</h3>
                <p id="box">{this.state.tasks}</p>
            </div>
            <div className="daily-box">
                <h3>Daily target</h3>
            </div>
        </div>

        <div id="modal" className={this.state.isOpen ? "show" : "hidden"}>
            <div className="header">
                <h3>Add new task</h3>
                <h4 className='close'onClick={() => this.closeModel()}>X</h4>
            </div>

            <form onSubmit={this.handleSubmit}>
                <input className='modal-field' type='text'onChange={this.handleChange}/>
                <button className='modal-button'>Confirm</button>
            </form>
        </div>
        <button className="add" onClick={() => this.openModel()}>Add task</button>
      </div>
    )
  }
}

export default Scrumboard