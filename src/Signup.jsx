import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <div className="login-container">
    <div className="fvck">
    <div className="title">
        <div className='welcome'>Sign Up</div>
        <div className='credentials'>Create your account</div>
        </div>
        <form >
          <div className="email">  <input type='email' placeholder='Email' /></div>
          <div className="email">  <input type='name' placeholder='Username' /></div>
          <div className="password">  <input type="password"  placeholder='Password' /></div>
         
          <div className="password">  <input type="password"  placeholder='Confirm password' /></div>
          
         <div className="signin"> <button  >Sign up</button></div>
         
         <div className="signup">Already have an account? <Link to="/"><span>  Login </span></Link></div>
        </form>
    </div>
</div>
  )
}

export default Signup