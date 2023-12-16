import React, { useState, useContext } from 'react'
import { Context } from '../context/Context.js'

export default function AuthForm(props){
  
    const { signup, login, userState } = useContext(Context)

    const initInputs = { email: "", password: "" }
    const [inputs, setInputs] = useState(initInputs)
    
    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
      }
    
      function handleLogin(e){
        e.preventDefault()
        login(inputs)
      }

    function handleChange(e){
      const {name, value} = e.target
      setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
      }))
    }
  
    

    const [memberToggle, setMemberToggle] = useState(false)
  
    return (
        <div className="auth-form">
        { memberToggle ? 
            <form onSubmit={handleSignup}>
                <input 
                    type="text" 
                    value={inputs.email} 
                    name="email" 
                    onChange={handleChange} 
                    placeholder="Email"/>
                <input 
                    type="password" 
                    value={inputs.password} 
                    name="password" 
                    onChange={handleChange} 
                    placeholder="Password"/>
                <button className="signUpIn">Sign Up</button>
                <h3 onClick={()=>setMemberToggle(false)}>Already a member?</h3>
            </form>
        :
            <form onSubmit={handleLogin}>
                <input 
                    type="text" 
                    value={inputs.email} 
                    name="email" 
                    onChange={handleChange} 
                    placeholder="Email"/>
                <input 
                    type="password" 
                    value={inputs.password} 
                    name="password" 
                    onChange={handleChange} 
                    placeholder="Password"/>
                <button className="signUpIn">Sign In</button>
                <h3 onClick={()=>setMemberToggle(true)}>Not a member?</h3>
            </form>
        }
    </div>
    )
}