import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
  return (
    <>
     <div>Signup</div>
    <button onClick={()=>{ navigate('/home')}}>login</button>
    </>
   
  )
}

export default Signup