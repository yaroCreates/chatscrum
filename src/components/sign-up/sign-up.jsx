import React from 'react'
import './sign-up.css'

function SignUp() {
    return (
        <div className='sign-up'>
            <h1>Don't have an account?</h1>
            <h3>Sign up here!</h3>
            <form className='form'>
                <div className="form-field">
                    <label for='text'>Full name</label>
                    <input name='text' type='text' />
                </div>
                <div className="form-field">
                    <label for='email'>Email</label>
                    <input name='email' type='email' />
                </div>
                <div className="form-field">
                    <label for='password'>Password</label>
                    <input name='password' type='password' />
                </div>
                <select id="options">
                    <option value="Developer">Developer</option>
                    <option value="Owner">Owner</option>
                </select>

                <button>Sign up</button>  
            </form>
        </div>
    )
}

export default SignUp