
import './App.css'; 
import { Sia } from './components/Button/Buttons.js';
 
import {ItemsList} from "./components/form/Forms.js"  
import {Tablee} from "./components/table/Tables.js"  
import {Cds} from "./card/cards.js"


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

    </div>  


       <div align='center'>
        
        <Cds></Cds>
       </div>

    </div>
    

  )
}  
 export default Hen;
 

