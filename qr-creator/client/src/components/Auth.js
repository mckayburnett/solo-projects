import React, { useState, useContext } from 'react'
import { Context } from '../context/Context.js'

export default function AuthForm(props){
  
    const { signup, login, userState } = useContext(Context)

    const initInputs = { email: "", password: "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
      const {name, value} = e.target
      setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
      }))
    }
  
    function handleSignup(e){
      e.preventDefault()
      signup(inputs)
    }
  
    function handleLogin(e){
      e.preventDefault()
      login(inputs)
    }

    const [toggle, setToggle] = useState(false)
    console.log('auth toggle', toggle)

  
    return (
        <form onSubmit={toggle ? {handleSignup} : {handleLogin}}>
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
            { toggle ? 
            <>
                <button className="signUpIn">Sign Up</button>
                <h3 onClick={()=>setToggle(!toggle)}>Already a member?</h3>
            </>
            :
            <>
                <button className="signUpIn">Sign In</button>
                <h3 onClick={()=>setToggle(!toggle)}>Not a member?</h3>
            </>
            }
        </form>
    )
}