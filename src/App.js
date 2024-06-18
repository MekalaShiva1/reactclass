
// import './App.css'; 
import { Sia } from './components/Button/Buttons.js';
 
import {ItemsList} from "./components/form/Forms.js"  
import {Tablee , Mangoe} from "./components/table/Tables.js"  
import {Cds} from "./card/cards.js" 
import {IplTeams} from "./propes/Firstcomponent.js" 
import {Hello} from "./propes/Secondcomponent.js" 
import { State} from "./propes/Secondcomponent.js"

import './components/Button/Button.css'



let user={
  name:"shiva",
  area:"dilsunagar",
  phone:"9849501022"
}


    const Hen=()=>{
  return( 
    <div> 

    
    <div  align="center" style = {{border: '2px solid #4CAF50', 
      padding: '10px',
      borderRadius: '5px',
      width: '500px', 
      margin: 'auto', 
      marginTop: '50px' 
      }}> 

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

        <div>
       <Mangoe></Mangoe>
       </div> 
       

        <div>
      <IplTeams></IplTeams>
       </div>  

       <div>
        <Hello name={user.name}/> 
        <Hello name={user.area}/>
        <Hello name={user.phone}/>
       </div> 
       <div>
        <Hello person={user}/> 
       
       </div> 

       {/* <div>
        < State/>
       </div> */}

    </div> 
    
    

  )
}  
 export default Hen;
 

