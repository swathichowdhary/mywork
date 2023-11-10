import React from "react";
class App extends React.Component{
    state={
        counter:0
    }
    constructor() {
        super() ;
            this.modify = this.modify.bind(this)
        }
    
    render(){
    return(
         <>
         <h2>counter value:{this.state.counter}</h2>
        <button onClick={this.modify}>click</button> 
        </>
         //BY USING ARROW FUNCTION THESE LINES ARE ENOUGH NO NEED OF CONSTRUCTOR()METHOD-FROM THIS TO 
        // <>
        //  <h2>counter value:{this.state.counter}</h2>
        //   <button onClick={()=>{
        //     this.setState({
        //     counter:this.state.counter + 1})
        //     }}>click</button> 
        // </>
        //THIS ARROW FUNCTION USING ----EASIEST METHOD
        )
    } 
    modify() {
        let c=this.state.counter
        this.setState({
          counter:c + 1
         })
           console.log(c)
        }  
}
export default App;