 
 export const IplTeams=()=>{ 
    const Teams = [
    
        {
            TeamName:"RCB", 
            TeamCapten:"Kholi",
            TeamPlayers:["kholi", "maxiwell","siraj","faf dupluess"],
            TeamCups:"0" ,
            TeamLogo:"https://i.pinimg.com/550x/a6/40/a6/a640a6cd05dc2dfb58ce3ff3467df677.jpg"
        }, 
        {
            TeamName:"SRH", 
            TeamCapten:"Patcummins",
            TeamPlayers:["abhishek sharma", "bhuvi","klassen","head"],
            TeamCups: "2",
            TeamLogo:"https://i.pinimg.com/originals/6e/9d/25/6e9d252b1a8ec39b01a248f1f9bd8b57.png"
        },
        {
            TeamName:"MI", 
            TeamCapten:"Rohith sharma",
            TeamPlayers:["Surya kumar","bhumra","Hardik","ishanth kishan"],
            TeamCups: "6",
            TeamLogo:"https://i.pinimg.com/originals/28/09/a8/2809a841bb08827603ccac5c6aee8b33.png"
        } ,
    ]; 

    function filterdata(Teams){
        const newteams=Teams.filter((eachteam)=> eachteam.TeamCups >=3 ); 
        return newteams;
        
    } 
    return(
        <div>
            {filterdata(Teams).map((eachteam) =>{
                return(
                    <div> 
                        <h2 className="ipl">{eachteam.TeamName}</h2>
                        {/* <img  src={eachteam.TeamLogo} width={300} height={200} ></img>   */}
                        <h2>{eachteam.TeamCapten}</h2> 


                        {eachteam.TeamPlayers.map((name1)=>{
                           return <h1 className="players">{name1}</h1>  

                          
                        })} 
                       

                    </div>

                );
            }
        )}
        </div>
    )


    
 
    }