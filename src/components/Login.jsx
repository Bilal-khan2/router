import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  return (
    <>
    <div>login</div>
    <button onClick={()=>{
     navigate('/home')
    }}>Login</button>
     <button onClick={()=>{
     navigate('/Signup')
    }}>Signup</button>
    </>
  )
}

export default Login