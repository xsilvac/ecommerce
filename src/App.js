import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import NoFound from './component/NoFound';
import Product from './component/Product';
import Products from './component/Products';
import NavBar from './component/Navbar';
import About from './component/About';
import Contact from './component/Contact';
import {Provider} from 'react-redux';
import store from './redux/store';
import Cart from './component/Cart';
import Checkout from './component/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
      <Provider store={store}>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Products' element={<Products />} />
            <Route path='Products/:id' element={<Product />} />
            <Route path='About' element={<About />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='Cart' element={<Cart />} />
            <Route path='Checkout' element={<Checkout />} />
            <Route path='*' element={<NoFound />} />
          </Routes>
          </Provider>
      </BrowserRouter></>
  );
}

export default App;
