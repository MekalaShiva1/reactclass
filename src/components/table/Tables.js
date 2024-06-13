 
 export const Tablee=()=>{
    return(
        <table style= {{ 
            border:'1px solid black',

        }}>  
            
            <tr>  

                <th style={{border:"2px solid black"}} >s.no</th>
                <th style={{border:"2px solid black"}}>name</th> 
                <th style={{border:"2px solid black"}}>phone </th>
                <th style={{border:"2px solid black"}}> address</th>
            </tr> 
            <tr>
                 <td>1</td> 
                 <td>shiva</td>
                 <td>98xxxxx22</td>
                 <td>hyderabad</td>
            </tr> 

            <tr>
                 <td>2</td> 
                 <td>vijay</td>
                 <td>98xxxxx33</td>
                 <td>hyderabad</td>
            </tr> 
            <tr>
                 <td>3</td> 
                 <td>naresh</td>
                 <td>95xxxxx43</td>
                 <td>hyderabad</td>
            </tr>

            
        </table>
    )
 }