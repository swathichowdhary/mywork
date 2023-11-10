import { useState } from "react";
import {useRef} from 'react'
function App() {
    // let [email,setemail]=useState('')
    let race= useRef()
    return(
        <div>
            {/* <div>
        <label>email:</label>
        <input type='email' value={email}  onChange={(e)=>{
            setemail(e.target.value)
        }}></input>
        </div> */}
        <div>
        <label>password:</label>
        <input type='password' ref={race}></input>
        </div>
        <div>
        <button onClick={()=>{
            // console.log("email:",email)
            console.log("password:",race.current.value);
        }}>login</button>
        </div>
        </div>
    )
    }

export default App;