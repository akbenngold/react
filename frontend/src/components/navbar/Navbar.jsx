import React, {useState} from 'react'
import '../navbar/Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';

function Navbar() {

const [menu, setMenu] = useState('menu');

  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
   


        <div className="nav-menu">
   
         <ul>
            <li onClick={()=>{setMenu('shop')}}><Link to='/' style={{textDecoration: 'none'}}>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('men')}}><Link to='/men' style={{textDecoration: 'none'}}>Men</Link>{menu==='men'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('women')}}><Link to='/women'style={{textDecoration: 'none'}}>Women</Link>{menu==='women'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('kids')}}><Link to='/kids'style={{textDecoration: 'none'}}>Kids</Link>{menu==='kids'?<hr/>:<></>}</li>
         </ul>
         <div className="nav-login-cart">
         <Link to='/login'><button>Login</button></Link>
         <Link to='/cart'><img src={cart_icon} alt="" /></Link></div>
        </div>
    </div>
  )
}

export default Navbar