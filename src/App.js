import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import NoFound from './component/NoFound';
import Product from './component/Product';
import Products from './component/Products';
import NavBar from './component/Navbar';
import About from './component/About';
import Contact from './component/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Products' element={<Products />} />
            <Route path='Products/:id' element={<Product />} />
            <Route path='About' element={<About />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='*' element={<NoFound />} />
          </Routes>
      </BrowserRouter></>
  );
}

export default App;
