import  { Link } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './routehome';
import About from './routeabout';
import Contactus from './routecontactus';
import Login from './routelogin';

function Header() {
    return(
        <u>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/contactus">Contactus</Link> </li>
            <li> <Link to="/login">Login</Link> </li>
        </u>
    )
    
}
function App(){
    return(
        <>
       <BrowserRouter>
       <Header/>
          <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/about" element={<About/>} />
             <Route path="/contactus" element={<Contactus/>} />
             <Route path="/login" element={<Login/>} />
          </Routes>
       </BrowserRouter>
       </>
    )
}
export default App;