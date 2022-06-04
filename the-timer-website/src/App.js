
import './App.css';
import React, { Component } from 'react';
// import bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import Login from './components/Login';
import Register from './components/Register';
import Feedback from './components/Feedback';
import Detail from './components/Detail';
import List from './components/List';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


class App extends Component {
  render() {
      return (
        <>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="feedback" element={<Feedback />} />
              <Route path="list/detail/:id" element={<Detail />} />
              <Route path="list" element={<List />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </>
      );
  }
}

export default App;
