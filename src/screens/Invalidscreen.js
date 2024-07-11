import React from 'react'
import Navbar from './Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

function Invalidscreen() {  
    const navigate= useNavigate();

    const HandleRedirection =()=>{  
        
            navigate("/")
        
        

    }
    return ( 
        <div> 
            <Navbar/>
            <h1>Invalid screen</h1> 
            <button onClick={HandleRedirection}> Back Home</button>
        </div>
        
    )
}

export default Invalidscreen
