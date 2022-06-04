import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Prodduct from './products/List';
import CreatePro from './products/Create';
import CreateCat from './categories/Create';
import UpdateCat from './categories/Update';
import UpdatePro from './products/Update';
import Category from './categories/List';
import Header from './Header';



class App extends Component {
  render() {
      return (
        <>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="product" element={<Prodduct />} />
              <Route path="product/create-product" element={<CreatePro />} />
              <Route path="product/update-product/:id" element={<UpdatePro />} />
              <Route path="category" element={<Category />} />
              <Route path="category/create-category" element={<CreateCat />} />
              <Route path="category/update-category/:id" element={<UpdateCat />} />
            </Routes>
          </BrowserRouter>
        </>
      );
  }
}

export default App;
