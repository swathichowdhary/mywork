
//   function App() {
//     let s={
//         background:'red',
//         color:'white',
//         marginTop:'40px'
//     }
//     return(
//     <div>
//         <h1 style={s}>hello js</h1>
//         <p style={s}>there are twenty lines</p>
//     </div>
//     )
// }
// export default App;
//4 methods of component styling
//1.external css file to link in it or classname,id
//2.object style
//3.give directly object style in tag
// function App() {
//     return(<div>
//         <h1 style={{
//         background:'red',
//         color:'white',
//         marginTop:'40px'
//     }}>hello js</h1>
//         <p style={{
//         background:'red',
//         color:'white',
//         marginTop:'40px'
//     }}>there are twenty lines</p>
//         </div>
//     )
// }
//4.create cssfile in public folder and link in index.html and it directly applies to it.