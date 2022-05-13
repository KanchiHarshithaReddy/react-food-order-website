import React from 'react'
import { Link } from 'react-router-dom'
import Icon from 'react-icons-kit'
import { shoppingCart } from 'react-icons-kit/feather/shoppingCart'
import { auth } from '../Config/Config'
import { useNavigate } from 'react-router-dom'
function Navbar({ user, totalProducts }) {
  const navigate = useNavigate();
  const hadleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login');
    })
  }
  return (

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <Link to="/" className="navbar-brand" > <img src="../Assets/logo.jpg" alt="logo" style={{ height: "50px", position: "relative", marginTop: "-10px" }}  ></img></Link>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    //     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    //       <li className="nav-item active ml-auto">
    //         {!user && <>
    //           <Link className='nav-link' to={'signup'} >SignUp</Link>
    //           <Link className='nav-link' to={'login'} >Login</Link>
    //         </>}
    //       </li>

    //       <li className="nav-item">

    //         <Link className='nav-link' to='/'>{user}</Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className='nav-link' to='/cart'>
    //           <Icon className='shoppingcart' icon={shoppingCart} size={20}></Icon>
    //           <span className='cart-indicator'>{totalProducts}</span>
    //         </Link>
    //         <li className="nav-item">
    //           <div className='btn btn-danger btn-md' onClick={hadleLogout} id="logout">Logout</div>
    //         </li>
    //       </li>
    //     </ul>

    //   </div>
    // </nav>

    <header className='header'>
    <div>
        <h1>
        <Link to="/" className="navbar-brand" > <img src="../Assets/logo.jpg" alt="logo" style={{ height: "50px", position: "relative", marginTop: "-25px" }}  ></img></Link>
        </h1>
    </div>
    <div className='header-links'>
        <ul>{!user && <>
            <li>
            <Link className='nav-link' to={'signup'} >SignUp</Link>
            
       </li>
      <li> <Link className='nav-link' to={'login'} >Login</Link></li></>}
       <li><Link className='nav-link' to='/'>{user}</Link></li>
       
          <li>
          <Link className='nav-link' to='/cart'>
            <Icon className='shoppingcart' icon={shoppingCart} size={20}></Icon>
              <span className='cart-indicator'>{totalProducts}</span>
           </Link>
          </li>
       <li><div className='btn btn-danger btn-md' onClick={hadleLogout} id="logout">Logout</div></li></ul>
        {/* <ul>
            <li>
                <Link to="/cart" className='cart'><i className='fas fa-shopping-cart'></i></Link>
            </li>
        </ul> */}
    </div>
       </header>


  )
}

export default Navbar