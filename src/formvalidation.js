import { useState } from "react";
// import {useRef} from 'react'
function App() {
    let [email,setemail]=useState('')
    let [errors,seterrors]=useState({
        email:""
    })
     function submithand(){
     if(email.trim()===""){
        seterrors((errors)=>({...errors,email:"enter email address"}))
    }
    else{
        seterrors(()=>({...errors,email:""}))
    }
}
    return(
        <div>
            <div>
        <label>email:</label>
        <div>
        <input type='email' value={email}  onChange={(e)=>{
            setemail(e.target.value)
        }}/>
        </div>
             {errors.email&&<span style={{color:'red'}}>{errors.email}</span>}
        </div>
        {/* <div>
        <label>password:</label>
        <input type='password' ref={race}></input>
        </div> */}
        <div>
        <button onClick={submithand}
        >login</button>
        </div>
        </div>
    )
    }
export default App