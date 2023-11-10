import { useState } from "react";

function App() {
    let price=16000;
     let [productname,updatename]=useState("redmirealpro")
    return(
    //     <>
    //     <h2>product:{productname}</h2>
    //     <h2>price:{price}</h2>
    //     <input id='pname'  />
    //     <button onClick={()=>{
    //         let p=document.getElementById('pname').value;
    //         updatename(p)}}>click</button>  
    //    </>

    // <>
    //     <h2>product:{productname}</h2>
    //     <h2>price:{price}</h2>
    //     <input id='pname' />
    //    <button onClick={()=>{
    // let p=document.getElementById('pname').value;
    // updatename(()=>{
    //       return   "react"
    //    })
    //    }}>Click</button>  
    //    </>

    <>
      <h2>product:{productname}</h2>
       <h2>price:{price}</h2>
      <input id='pname' />
       <button onClick={()=>{
   let p=document.getElementById('pname').value;
    updatename((prev)=>{
          return prev + p
       })}}>click</button>  
       </>
       )
    }
export default App;