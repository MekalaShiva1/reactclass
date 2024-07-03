import { useState } from "react" ;
// import "./reactforms/src/components/Button/Button.css" 
import "../Button/Buttons"
 




export const UseStateExample =()=>{ 
    const [user , setUser]=useState(0) 
    //  const incrementHandler =()=>{
    //     setUser( (user)=>user + 1)
    //  }; 

    //  const decrementHandler=()=>{  
    //     if(user>0){
    //     setUser((user)=>user -1) 
    //     }
    //  }; 

    //  const reset=()=>{
    //     setUser(0)
    //  }  

    const CountHandler=(type)=>{
        switch(type){
            case "increment":  
            setUser ((user)=> user+1);  
            break;
            case "decrement": 
                  if(user>0){
                setUser((user)=> user-1) 
                  }; 
                  break;
               case "reset":
                setUser(0)   
                break; 
           default:
            break;
            



        }
    }

    return(
        <div> 
            <h1>{user}</h1>  
            <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-3xl dark:text-white">{user}</h1>

            <button 
            
            onClick={()=>CountHandler("increment")}
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
  Increment
</button> 
<button 
            
            onClick={()=>CountHandler("decrement")}
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
  decrement
</button> 

<button 
            
            onClick={()=>CountHandler("reset")}
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
  restart
</button>
{/* <h3>hello</h3> */}

            {/* <button  onClick={()=>CountHandler("increment")} >Increment</button>  */}
            {/* <button className="btn" onClick={()=>CountHandler("decrement")} >Decrement</button>
            <button className="btn" onClick={()=>CountHandler("reset")} >Reset</button> */}
           
        </div>
    )
}