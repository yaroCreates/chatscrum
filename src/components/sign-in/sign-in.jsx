import React from 'react'
import './sign-in.css'
import { Link } from 'react-router-dom'
import content from '../../static/index'

function SignIn() {
    return (
        <div className='sign-in'>
            <div className="sign-up-header">
                <h1>Have an account already?</h1>
                <h3>Sign in here!</h3>

                <form className='form'>
                    <div className="form-field">
                        <label for='email'>Email</label>
                        <input name='email' type='email' />
                    </div>
                    <div className="form-field">
                        <label for='password'>Password</label>
                        <input name='password' type='password' />
                    </div>
                    <div className="form-field">
                        <label for='text'>Project name</label>
                        <input name='text' type='text' />
                    </div>
                    <br />
                    <Link to='/scrumboard'><button>Sign in</button></Link>
                </form>
                <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
                <p><Link to='/'>Return home</Link></p>
            </div>
        </div>
    )
}

export default SignIn