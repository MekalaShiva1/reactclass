import React,{ Component } from "react";

export class ClassComponentButton extends Component {
  render() {
    return (
      <div>
        <button className="Classcompbtn">Clickme</button>
      </div>
    );
  }
}

export class ButtonCls extends Component {
  state = {
    text1: "subscribe",
    text2: "subscribed",
    isSubscribe: true,
  };

  subscribeHandlar = () => {
    console.log("button clicked");
    this.setState({
      isSubscribe: !this.state.isSubscribe,
    });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.subscribeHandlar} >
          {this.state.isSubscribe ? this.state.text1 : this.state.text2}
        </button>

        {this.state.isSubscribe?(
            <> 
            <h1>Plese subsribe</h1>
            </>  
        )
            :(
                <> 
                
                {/* <h2 >Thanks</h2>   */}
                {
                  alert("Thanks for subscribed")  
                  
                  
                }  
                
                
                
                </>
            ) 
        }
                
            
        
      </React.Fragment>
    );
  }
}
