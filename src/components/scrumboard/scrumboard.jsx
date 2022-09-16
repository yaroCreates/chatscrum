import React, { Component } from 'react'
import './scrumboard.css'
import data from '../../static/Data'

export class Scrumboard extends Component {

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
      </div>
    )
  }
}

export default Scrumboard