



// export const Hello=(props)=>{ 

//     const {name, area, phone }=props.person 


//     return( 
//         <div>
        
//         <p>{name}</p>  
//         <p>{area}</p>
//         <p>{phone}</p> 
//         </div>
       
//     )
// } 
 import{useState} from 'react'
  export const State=()=>{ 

    const [city,setCity]=useState("hyd")  
    if(city=== "hyd"){
        setCity("Bnglr")
    }
    return(
        <div>
            <h2>{city}</h2>
        </div>
    )
 }