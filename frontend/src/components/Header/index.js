import { Link } from "react-router-dom";
import './headerModules.css'
import UserCard from "../UserCard";



function Header() {
return (
  <header>
    <h2 className="navbar-logo">Conect Aba</h2>
    <div className="menu">
      
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Cadastrar</Link>
      
      
    </div>
    <UserCard/>
    
  </header>
);
}

export default Header;
