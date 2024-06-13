export const Form=()=>{
    return(
        <input type="text" ></input>
    )
} 

 export const FormNumber=()=>{
    return(
        <input type="number" ></input>
    )
} 

export const FormEmail=()=>{
    return(
        <input type="email" required ></input>
    )
} 


 export const ItemsList=()=>{
    return(
        <ul>
         <Items/> 
        </ul> 
    );
}  
 
  export const Pic=()=>{
    return(
        <input type="file" accept="image/*"></input>
    );
   }
   
  export  const Items=()=>{ 
        return(
            <div>
            <li>Enter your first name: <Form/></li> 
            <li>Enter your last name : <Form/></li>
            <li>Enter your Address: <Form/></li> 
            <li>Enter your Phone Number: <FormNumber/></li>
            <li>Enter your Email: <FormEmail/> </li>   
            <li>Upload your Image: <Pic/></li>

            
            </div>
        )

    }