import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();
  const[signState,setSignState] = useState("Sign In")

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate('/');
  }

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt=''/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up"?<input type='text' placeholder='Your name'/>:<></>}
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='password'/>
          {signState === "Sign Up"?<button type='submit' onClick={handleSubmit}>Sign Up</button>:<button type='submit' onClick={handleSubmit}>Sign In</button>}
        </form>
        <div className="form-switch">
          {signState === "Sign In"? <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up</span></p> : <p>Already have an Account? <span onClick={()=>{setSignState("Sign In")}}>Sign In</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
