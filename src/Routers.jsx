import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Header from './components/common/Header';
import Footer from './components/common/Footer';


const Routers = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>


  )
}

export default Routers;