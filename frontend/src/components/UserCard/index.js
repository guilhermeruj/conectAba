import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './usercardModule.css';
import { BsFillPersonFill, BsPencilSquare, BsEnvelopeFill, BsGearFill, BsQuestionCircleFill, BsBoxArrowRight } from 'react-icons/bs';

function UserCard() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="action">
      <div className="profile" onClick={toggleMenu}>
        <BsFillPersonFill className="icon" />
      </div>
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <h3>User<br/><span>Administrador</span></h3>
        <ul>
          <li>
            <BsFillPersonFill className="icon" />
            <Link to="/login">Meu Perfil</Link>
          </li>
          <li>
            <BsPencilSquare className="icon" />
            <Link to="/login">Editar Perfil</Link>
          </li>
          <li>
            <BsEnvelopeFill className="icon" />
            <Link to="/">Mensagens</Link>
          </li>
          <li>
            <BsGearFill className="icon" />
            <Link to="/">Configurações</Link>
          </li>
          <li>
            <BsQuestionCircleFill className="icon" />
            <Link to="/">Help</Link>
          </li>
          <li>
            <BsBoxArrowRight className="icon" />
            <Link to="/login">Sair</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserCard;
