import { useState } from "react";

 export const TodosClass = () => {
  const intial = [
    {
      id: "1",
      period: "morning",
      routine: ["wak up at 5'0 AM", "fresh up at 6'0 AM", "tiffen at 7'0 AM"],
    },
    {
      id: "2",
      period: "afternoon",
      routine: ["Lunch up at 1'0 PM", "Class at 2:30 PM", "Break  at 5'0 PM"],
    },
  ];
  const [todos, settodos] = useState(intial);

  return (
    <>
      {todos.map(
        (each) => {
          return (
            <>
              <h2>{each.period}</h2>  
              {/* {
                each.routine.map()
              } */}
              
            </>  
            
            
          ); 
         
        })
      }
    </>
  );
}; 

