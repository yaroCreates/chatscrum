import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className='home'>
      <h1>Welcome to <span>Chatscrum</span></h1>
      <div className="links">
        <h4><Link to='/signin'>Sign in</Link></h4>
        <h4><Link to='/signup'>Sign up</Link></h4>
      </div>
    </div>
  )
}
