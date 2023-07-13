import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

/* Paginas */
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

/* components */
import Header from './components/Header';
import Footer from './components/Footer';
import Message from './components/Message';

import { UserProvider } from './context/UserContext';

function RoutesWithHeaderFooter() {
  const location = useLocation(); // Obtém a localização atual da rota //Gets the current location of the route
  const isLoginPage = location.pathname === '/login'; // Verifica se a rota atual é a tela de login //Checks if the current route is the login screen

  return (
    <>
      {!isLoginPage && <Header />} {/* Renderiza o Header apenas se não estiver na tela de login */}{/* Renders the Header only if not on the login page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
      {!isLoginPage && <Footer />} {/* Renderiza o Footer apenas se não estiver na tela de login */}{/* Renders the Footer only if not on the login page */}
    </>
  );
}

function RoutesApp() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Message /> {/* Renderiza a mensagem em todas as páginas */}{/* Renders the message on all pages */}
        <RoutesWithHeaderFooter /> {/* Renderiza as rotas com o header e o footer condicionalmente */}{/* Renders the routes with the header and footer conditionally */}
      </UserProvider>
    </BrowserRouter>
  );
}

export default RoutesApp;
