import React, { useState, useContext } from 'react'
import { Context } from '../context/Context.js'

export default function AuthForm(props){
  
    const { signup, login, userState, toggle, setToggle } = useContext(Context)

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
        <div className="auth-wrapper">
        { memberToggle ? 
            <form onSubmit={handleSignup} className="auth-form">
                <h4>please signup to continue</h4>
                <input className="auth-email"
                    type="text" 
                    value={inputs.email} 
                    name="email" 
                    onChange={handleChange} 
                    placeholder="Email"/>
                <input className="auth-password"
                    type="password" 
                    value={inputs.password} 
                    name="password" 
                    onChange={handleChange} 
                    placeholder="Password"/>
                <button className="auth-button">Sign Up</button>
                <h2 className="auth-member" onClick={()=>setMemberToggle(false)}>Already a member?</h2>
            </form>
        :
            <form onSubmit={handleLogin} className="auth-form">
                <h4>please login to continue</h4>
                <input className="auth-email"
                    type="text" 
                    value={inputs.email} 
                    name="email" 
                    onChange={handleChange} 
                    placeholder="Email"/>
                <input className="auth-password"
                    type="password" 
                    value={inputs.password} 
                    name="password" 
                    onChange={handleChange} 
                    placeholder="Password"/>
                <button className="auth-button">Sign In</button>
                <h2 className="auth-member" onClick={()=>setMemberToggle(true)}>Not a member?</h2>
            </form>
        }
    </div>
    )
}