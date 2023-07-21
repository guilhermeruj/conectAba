import { Link } from "react-router-dom";
import './headerModules.css'
import UserCard from "../UserCard";

// Context
import { Context } from '../../context/UserContext';
import { useContext } from 'react';

function Header() {
  const { authenticated, logout } = useContext(Context)
  return (
    <header className="header-container">
      <h2 className="navbar-logo">Conect Aba</h2>
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/register">Cadastrar</Link>
      </div>
      <UserCard/>
    </header>
  );
}

export default Header;
