import { Component } from "react";
import { ButtonCls } from "./Button/ClssCmpntButton";
import { Btnss } from "../../propes/tryb";

 
export
 class TodoClass extends Component{ 
    state={ 
        Todos: ["hello good morning"," i am walkup at 5'0 clock"]
    } 
    todoHandler = ()=>{ 
        this.setState({
            Todos:[...this.state.Todos,"hello add me"]
        })

    }; 
    todoUpdateHandler =(index)=>{ 
        

    };
    todoDeletHandler =(index)=>{

    }

    render(){
        return( 
            <>
            <ol> 
                {this.state.Todos.map((eachTodos,index)=> {
                return( 
                    <> 
                    <li>{eachTodos}</li>  
                    <Btnss text="update"  onPress={() => this.todoUpdateHandler(index)} /> 
                    <Btnss text="delete" onPress={() => this.todoDeletHandler(index)} />

                    </>
                    
                )
    })}

            </ol>   
            
             <Btnss text="add todo" onPress={this.todoHandler} />
            
            </>
            
        )
    }
 }