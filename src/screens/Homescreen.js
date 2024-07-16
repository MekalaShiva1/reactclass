


import React, { useState } from 'react'
import Navbar from './Navbar/Navbar';
import axios from 'axios';

function Homescreen() { 
    const [data,setdata]=useState([]);

    const fetchData= async ()=>{
        const response = await axios.get("https://fakestoreapi.com/products/") 
        if(response.status===200){
            setdata(response.data); 
            console.log(setdata)
        }
    }
    return ( 
        <div> 
            <Navbar/>
            
            <h1>
            Home screen 
            </h1> 
            <button onClick={fetchData}> Product list</button>  

            {
                data.length>0?( 
                    <>
                    { data.map((each)=>{
                        return(
                            <>
                           
                            <img src={each.image} alt="picture" height={100} width={100}/> 
                            {/* <h3>{each.price}</h3> */}
                            <h2>{each.title}</h2>
                            </>
                        )
                    })

                    } 
                    </>
                ):(
                    <h2>No Products</h2>
                )
            }
        </div>
        
    )
}

export default Homescreen;
