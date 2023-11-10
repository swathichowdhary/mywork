import React from "react";
class App extends React.Component{
    state={
        product:"redmi real pro",
        price:3000
    }
    constructor() {
        super() ;
            this.modify = this.modify.bind(this)
        }
    
    render(){
    return(
         <>
         <h2>productName:{this.state.product}</h2>
         <h2>price:{this.state.price}</h2>
         <input id='price' type='number' />
        <button onClick={this.modify}>click</button> 
        </>
    //      BY USING ARROW FUNCTION THESE LINES ARE ENOUGH NO NEED OF CONSTRUCTOR()METHOD-FROM THIS TO 
    //     <>
    //      <h2>productName:{this.state.product}</h2>
    //      <h2>price:{this.state.price}</h2>
    //      <input id='price' type='number' />
    //       <button onClick={()=>{
    //         let p=document.getElementById('price').value;
    //         console.log(p);
    //        this.setState({
    //        price:p
    //     })
    //    }}>click</button> 
    //     </>
    //     THIS ARROW FUNCTION USING ----EASIEST METHOD
        )
    } 
    modify() {
        let p=document.getElementById('price').value;
        console.log(this.p)
        this.setState({
          price:p
        },
         ()=>{
        console.log(this.state)
        })
        }  
}
export default App;