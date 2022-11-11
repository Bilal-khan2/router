import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
const Home = () => {
    const navigate=useNavigate()
  return (<>
  <div className="nav">
    <div className="home">
        <button onClick={()=>{navigate('/home')}}>Home</button>
    </div>
    <div className="logout">
    <button onClick={()=>{navigate('/')}}>Logout</button>
    </div>
  </div>
    <div>Home page</div>
 
    
    </>
  )
}

export default Home