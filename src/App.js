import React from 'react';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/homePage.jsx'
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import ProductReview from './components/ProductReview/ProductReview';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductReview />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
