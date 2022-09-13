import React from 'react'

function SignUp() {
    return (
        <div className='sign-up'>
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
            </form>
        </div>
    )
}

export default SignUp