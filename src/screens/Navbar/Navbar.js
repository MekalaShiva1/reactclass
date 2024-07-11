
import React from 'react'
import { Link } from 'react-router-dom'  
import "./Styles.css" 


function Navbar() {  
  
    const Linkstyle={ 
      textDecoration: "none", 
      // color:"red" ,
      fontSize:"30px" ,
     
 
    } ; 
    const Liststyle={
      // justfyContent:"center",
      listStyle:"none", 
      // color:"red"

    }
  
    return ( 
        <div className="container-fluid">
  <ul className="navbar-nav">
   
    <li className="nav-item Style" style={Liststyle}>
      {/* <a className="nav-link" href="#">
        Home
      </a> */} 
      <Link to='/Homescreen' style={Linkstyle}> 
      Home
      </Link>
    </li>
    <li className="nav-item" style={Liststyle} >
      {/* <a className="nav-link" href="#">
        Contact
      </a> */} 
      <Link to={"/Contactscreen"} style={Linkstyle}> 
     Contact
      </Link>
    </li> 

    <li className="nav-item" style={Liststyle}>
      {/* <a className="nav-link" href="#">
        About
      </a> */} 
      <Link to={"/Aboutscreen"}style={Linkstyle}> 
      About
      </Link>
    </li>

    <li className="nav-item" style={Liststyle}>
      {/* <a className="nav-link" href="#">
        Settings
      </a> */} 
      <Link to={"/Settingscreen"} style={Linkstyle} > 
      Settings
      </Link>
    </li>

  </ul>
</div>

        
    )
}

export default Navbar

