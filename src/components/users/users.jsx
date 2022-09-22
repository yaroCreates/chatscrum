import React, { Component } from 'react'
import './users.css'
import axios from 'axios'

export class Users extends Component {
    constructor() {
        super()

        this.state = {
            users: [],
            loading: true
        }
    }


  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Users