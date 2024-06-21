// import 'Button.css'
export const Sia=(prop)=>{ 
    const {text, onPress, bgColor,width,height }=prop
    return(
    
            <button  style={{width:width, 
             backgroundColor:bgColor, text:text,
            height:height , onClick:onPress}} > 
                {text}  
            </button>
        
    )
}   



