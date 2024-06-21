
// import './App.css'; 
import { Sia } from './components/Button/Buttons.js';
 
import {ItemsList} from "./components/form/Forms.js"  
import {Tablee , Mangoe} from "./components/table/Tables.js"  
import {Cds} from "./card/cards.js" 
import {IplTeams} from "./propes/Firstcomponent.js" 
// import {Hello} from "./propes/Secondcomponent.js" 
import { State} from "./propes/Secondcomponent.js"

import './components/Button/Button.css'
import { FakeData } from './propes/Thirdcomponent.js'; 
import {ImgeComponent} from './propes/image.js' 
import{Btnss} from"./propes/tryb.js"



let user={
  name:"shiva",
  area:"dilsunagar",
  phone:"9849501022"
}


    const Hen=()=>{
  return( 
    <div> 

    
    <div> 

      <h1>Application form</h1> 
       
       <ItemsList> 
       </ItemsList> 
       <Sia></Sia> 
      <br></br> 
    </div>   


    <div align='center' style={{
      marginTop:'30px'
    }} >
      <Tablee></Tablee> 

      <Mangoe></Mangoe>

    </div>   


        <div align='center'>
        
        <Cds></Cds>
       </div>  

        {/* <div>
       <Mangoe></Mangoe>
       </div>  */}
       

        <div>
      <IplTeams></IplTeams>
       </div>  

       {/* <div>
        <Hello name={user.name}/> 
        <Hello name={user.area}/>
        <Hello name={user.phone}/>
       </div>  */}
       {/* <div>
        <Hello person={user}/> 
       
       </div>  */}

       {/* <div>
        < State/>
       </div> */} 


       
    <div>
      {FakeData.map((eachproduct)=>{ 

        return( 
          <div>
          <p>{eachproduct.title}</p> 
             
          <img src={eachproduct.image} height={100} width={100} ></img> 
          <p>{eachproduct.price}</p>  
          <Btnss  text={eachproduct.price} bgColor="green" height="200" width="9" onPress={()=>{}} /> 
          <Btnss  text="buy" bgColor="red" height="200" width="100" onPress={()=>{}} />
          
          
          
          
          </div>
          
        )
      })}  


      
    </div>  
    <div>
      
    </div>
    

    </div>  

    
    

  )
}  
 export default Hen;
 

