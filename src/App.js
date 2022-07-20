import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home';
import NoFound from './component/NoFound';
import Product from './component/Product';
import Products from './component/Products';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='Products' element={ <Products/> } />
        <Route path='Products/:id' element={ <Product /> } />
        <Route path='*' element={ <NoFound/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
