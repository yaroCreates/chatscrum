import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home'>
      <h1 className='logo'>Chatscrum</h1>
      <h1>Welcome to Chatscrum</h1>
      <div className="links">
        <h4><Link className="link-tag" to='/signin'>Sign in</Link></h4>
        <h4><Link className="link-tag" to='/signup'>Sign up</Link></h4>
      </div>
    </div>
  )
}
