import React from 'react'
import './sign-up.css'
import { Link } from 'react-router-dom'
import content from '../../static/index'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

function SignUp() {

    const schema = yup.object().shape(
        {
            fullname: yup.string().required("Please enter full name").min(6),
            email: yup.string().required("Please enter a valid email"),
            password: yup.string().required("Please enter password").matches(
                /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
                "Must contain 8 characters, One Uppercase, One Lowercase, a number and a special character"
            )
        }
    )

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: yupResolver(schema)
        }
    )

    const onSubmit = (data) => { console.log(data) }
    return (
        <div className='sign-up'>

            <h1 className='logo'>Chatscrum</h1>
            <div className="sign-up-header">
                <h1>Don't have an account?</h1>
                <h3>Sign up here!</h3>
            </div>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                {content.inputs.map((input, key) => (
                    <div className="form-field" key={key}>
                        <label htmlFor={input.name}>{input.label}</label>
                        <input type={input.type} name={input.name} {...register(input.name)} />
                        <span className="message">{errors[input.name]?.message}</span>
                    </div>
                ))}
                <label htmlFor='options'>User type</label>
                <br />
                <select id="options">
                    <option value="Developer">Developer</option>
                    <option value="Owner">Owner</option>
                </select>
                <br />
                <button>Sign up</button>
            </form>
            <p>Have an account? <Link to='/signin'>Sign in</Link></p>
            <p><Link to='/'>Return home</Link></p>
        </div>
    )
}

export default SignUp