import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate  } from 'react-router-dom';


/* Paginas */
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserPage from './pages/UsuarioEdit';
import SearchUser from './pages/SearchPage';
import Profile from './pages/Profile';

/* components */
import Header from './components/Header';
import Footer from './components/Footer';
import Message from './components/Message';

import { UserProvider } from './context/UserContext';


function RoutesWithHeaderFooter() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Rotas que precisam ser protegiadas  */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edituser" element={<UserPage />} />
        <Route path="/search-user" element={<SearchUser />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

function CheckAuth() {
  const isAuthenticated = localStorage.getItem('token');
  const navigate = useNavigate();

  // Verifica a autenticação do usuário
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return <RoutesWithHeaderFooter />;
}

function RoutesApp() {


  return (
    <BrowserRouter>
      <UserProvider>
        <Message />
        <CheckAuth /> {/* Verifica a autenticação antes de renderizar as rotas */}
      </UserProvider>
    </BrowserRouter>
  );
}

export default RoutesApp;
