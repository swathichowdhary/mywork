import'./jsxattindex.css';

 function App() {
    return(<div>
        {sum(9,7)}
        <input type='textbox' id='sub'/>
        <label htmlFor='sub'>subscribe:</label>  
        <h1 id='demo' className='test'>hello js</h1>
        </div>
    )
}
function sum(a,b){
    return a+b;
}
export default App;