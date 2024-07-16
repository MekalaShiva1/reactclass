import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseEffectex1() {  
    const [Data , setData]=useState([]); 
    useEffect (()=>{ 
        fetchdata();

    },[]);
    const fetchdata=async()=>{
        try{
            const responce= await axios.get("https://fakestoreapi.com/products")
            console.log(responce.data) 
            if(responce.status===200){  
                setData(responce.data)


            } 
        
        }catch(err){
          console.log(err)  
        }
    }
    return ( 
        <div>
            
            {
                Data.length>0 && <>
                {
                    Data.map((each=>{
                        return(
                            <> 
                            <h2>{each.title}</h2>  
                            <img src={each.image} alt="picture" height={100} width={100}/>  
                            {/* <img src={each.img}/> */}
                            </>
                        );
                    }))
                }
                </>
            }
        </div>
        
    )
}

export default UseEffectex1;
