import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

/* Paginas */
import Login from './pages/Login';
import Register from './pages/Register';
import UserPage from './pages/UsuarioEdit';
import SearchUser from './pages/SearchPage';
import HomePage from './pages/Home';
/* components */
import Message from './components/Message';

import { UserProvider } from './context/UserContext';
import UserProfile from './pages/PaginaPerfil';

function CheckAuth() {
  const isAuthenticated = localStorage.getItem('token');
  const navigate = useNavigate();

  // Verifica a autenticação do usuário
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
}

function RoutesApp() {
  const routes = (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/edituser" element={<UserPage />} />
      <Route path="/search-user" element={<SearchUser />} />
      <Route path="/user-profile" element={<UserProfile/>} />
    </Routes>
  );

  return (
    <BrowserRouter>
      <UserProvider>
        <Message />
        <CheckAuth /> {/* Verifica a autenticação antes de renderizar as rotas */}
        {routes}
      </UserProvider>
    </BrowserRouter>
  );
}

export default RoutesApp;
