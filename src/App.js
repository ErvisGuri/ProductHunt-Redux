import React from 'react';

import './App.css';
import "react-toastify/dist/ReactToastify.css"

import Cart from './components/Cart/Cart';
import { ToastContainer } from "react-toastify"
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/homePage.jsx'
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import ProductReview from './components/ProductReview/ProductReview';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductReview />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
