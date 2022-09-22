import React, { Component } from 'react'

export class AddTask extends Component {

    state = {
        content: ""
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
            content: e.target.value
        })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            isOpen: false
        })
        this.props.addTask(this.state)
        this.setState({
            content: ""
        })
    }

    render() {
        return (
            <div className='add-task'>
                <div id="modal" className={this.state.isOpen ? "show" : "hidden"}>
                    <div className="header">
                        <h3>Add new task</h3>
                        <h4 className='close' onClick={() => this.closeModel()}>X</h4>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <input className='modal-field' type='text' onChange={this.handleChange} value={this.state.content}/>
                        <button className='modal-button'>Confirm</button>
                    </form>
                </div>
                <button className="add" onClick={() => this.openModel()}>Add task</button>
            </div>
        )
    }
}

export default AddTask