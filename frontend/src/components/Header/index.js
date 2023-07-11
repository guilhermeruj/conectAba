import { Link } from "react-router-dom";
import './style.css'

function Header() {
  return (
    <header>
      <h2>Desenvolvedor react</h2>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/Cadastro">Cadastrar</Link>
      </div>
    </header>
  );
}

export default Header;
