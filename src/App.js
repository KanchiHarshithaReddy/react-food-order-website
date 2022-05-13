// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home'
import Signup from './Components/Signup';
import Login from './Components/Login';
import AddProducts from './Components/AddProducts';
import Cart from './Components/Cart';
// import Icon from 'react-icons-kit'
// import {shoppingCart} from 'react-icons-kit/feather/shoppingCart'
// import NotFound from './Components/NotFound';
function App() {
  return (
    <div className="App">
      <Router>

        <Link className='nav-link' to={'/'} ></Link>
        <Link className='nav-link' to={'/signup'} ></Link>
        <Link className='nav-link' to={'/login'} ></Link>
        <Link className='nav-link' to={'/addproducts'} ></Link>
        
        <Link className='nav-link' to={'/cart'}></Link>
        {/* <Link className='nav-link' to={'/notfound'} ></Link> */}
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/addproducts" element={<AddProducts />}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          {/* <Route  element={<NotFound />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
