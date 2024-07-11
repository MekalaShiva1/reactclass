



import React from 'react'
import Navbar from './Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';


function Contactscreen() {
    return ( 

        <div>  
            
            <Navbar/>

            <h1>
            Contact screen
            </h1>  
            
            
           
            <Link to={"Orders"}>Places order</Link> <br></br>
            <Link to={"Places"}>Visited Orders</Link>
          
            
             
            <Outlet/>
        </div>
        
    )
}

export default Contactscreen;
