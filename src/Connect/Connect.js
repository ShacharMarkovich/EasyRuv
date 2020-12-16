import React, { useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export const align_center_style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
    zIndex: 100,
    border: "15px solid light gray"
  }

function Connect() {
    const [loginOption, setOption] = useState(true)

    return (
        <div style={align_center_style}>
            <h3 style={{ "text-align": "center" }} >
                <button class="btn" onClick={() => setOption(true)}>Login</button> or 
                <button class="btn" onClick={() => setOption(false)}> Register</button>
            </h3>
            { loginOption ? <LoginForm  /> : <RegisterForm  /> }
        </div >)
}

export default Connect
