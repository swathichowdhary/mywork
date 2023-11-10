import { useState } from "react";
function App() {
    let [product, updateproduct] = useState({
        pname:'realpro',
        price:12000
    })
    return(
          <>
             <h2>productname:{product.pname}</h2>
             <h2>price:{product.price}</h2>
             <h2>product:{JSON.stringify(product)}</h2>
             <input id="demo"/>
             <button onClick={()=>{
                let mprice=document.getElementById("demo").value;
                updateproduct({
                    ...product,
                    price:mprice
                })}}>click</button>
        </>
    )
}
export default App;