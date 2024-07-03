import { Component } from "react";

 

  export class Productlist extends Component{ 
     componentDidMount() {
       
    this.fetchdata();

    
     
} 

     fetchdata=()=>{ 

        fetch("https://fakestoreapi.com/products")
     .then((response)=> response.json())
     .then((response)=>console.log(response));

     }   


    render(){
        return (
            <div>
                <h2>Product listing </h2>
            </div>
        )

        
    }
 }