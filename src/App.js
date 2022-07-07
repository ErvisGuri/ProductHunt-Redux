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
import SignInSignUp from './components/SignInSignUp/SignInSignUp';
import Profile from './components/Profile/Profile';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      {user ? (
        <>
          <ToastContainer />
          <NavBar />
          <Routes>
            <Route exact path='/' element={<SignInSignUp />} />
            <Route exact path='/homepage' element={<HomePage />} />
            <Route path='/products' element={<ProductReview />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/profile' element={<Profile />} />
          </Routes></>) : (<><SignInSignUp />
          </>)

      }

    </div >
  );
}

export default App;
