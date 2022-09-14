import React from 'react'
import './sign-up.css'
import content from '../../static/index'

function SignUp() {
    return (
        <div className='sign-up'>
            <div className="sign-up-header">
                <h1>Don't have an account?</h1>
                <h3>Sign up here!</h3>
            </div>
            <form className='form'>
                {content.inputs.map((input, key) => (
                    <div className="form-field" key={key}>
                        <label htmlFor={input.name}>{input.label}</label>
                        <input type={input.type} name={input.name} />
                    </div>
                ))}
                <label htmlFor='options'>User type</label>
                <br/>
                <select id="options">
                    <option value="Developer">Developer</option>
                    <option value="Owner">Owner</option>
                </select>
                <br />
                <button>Sign up</button>
            </form>
            <p>Have an account? Sign in</p>
        </div>
    )
}

export default SignUp