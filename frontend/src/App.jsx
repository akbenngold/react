import '../src/App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes >
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory category='men'/>}/>
          <Route path='/women' element={<ShopCategory category='women'/>}/>
          <Route path='/kids' element={<ShopCategory category='kids'/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
      </Router></div>
  )
}

export default App