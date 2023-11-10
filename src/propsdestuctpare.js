import App1 from './propsdestrchild'
function App() {
    let product1 = {
        name:"swathi",
        amount:1300,
        aprice:23,
        dprice:34
    }
    return(
        <App1 {...product1} />
    )
}
export default App;