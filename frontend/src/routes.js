import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Paginas */
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

/* components */
import Header from './components/Header';
import Footer from './components/Footer';
import Message from './components/Message'

import { UserProvider } from './context/UserContext';

function RoutesApp() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Message />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default RoutesApp;
