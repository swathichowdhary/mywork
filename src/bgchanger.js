import './bg.css';
function App() {
    return(
        <div classname="Wrapper">
        <h1>Background color changer</h1>
        <input type='color' onClick={
            (e)=>{
       document.body.style.background=e.target.value
            }
        }/>
        </div>
    )
}
export default App;