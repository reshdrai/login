// import { Modal } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import KeepMountedModal from './Modal'
import { Modal, Box, Button, Typography } from '@mui/material';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState(false)
    const [showModal, setShowModal] = useState(null);
    const onchangeHandle = (e) => {
        if (e.target.name === 'email'){
            setEmail(e.target.value)
            
        }
        else if (e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (email ===''){
            setShowModal(false)
            setCheckPassword(false);
        } 
        else if (password.length <= 8){
            setCheckPassword(true)
            setShowModal(false) 
        }
        else{
            setCheckPassword(false);
            setShowModal(true)
            
        }
        
        
    };

    const closeModal = () => {
        setShowModal(false);
    };
  return (
    <div className="login-container">
        <div className="fvck">
        <div className="title">
            <div className='welcome'>Welcome</div>
            <div className='credentials'>Enter your credentials for login</div>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="email">
                        <input type='email' name="email" placeholder='email' value={email} onChange={onchangeHandle} />
                        
                    </div>
                    <div className="password">
                        <input type="password" name="password" placeholder='password' value={password} onChange={onchangeHandle} />
                        {checkPassword && <div className="check-password">the password should be of 8 letters</div>}
                    </div>
              
             <div className="signin" type="submit"> <button  >Login</button></div>
             <div className="forgot">Forgot password ?</div> 
             <div className="signup">Dont have account? <Link to="/signup"><span>  Sign Up </span></Link></div>
            </form>
            
        </div>
        <Modal open={showModal} onClose={closeModal} aria-labelledby="login-modal-title" aria-describedby="login-modal-description">
        <Box sx={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                    <Typography variant="h6" component="h2" id="login-modal-title">Login Successful!</Typography>
                    
                    <Typography id="login-modal-description">Welcome back, {email}!</Typography>
                    
                   
                </Box>
            </Modal>
        
    </div>
  )
}

export default Login