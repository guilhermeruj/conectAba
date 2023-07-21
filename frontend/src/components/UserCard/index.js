import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './usercardModule.css';
import { BsFillPersonFill, BsPencilSquare, BsEnvelopeFill, BsGearFill, BsQuestionCircleFill, BsBoxArrowRight } from 'react-icons/bs';
import api from '../../utils/api'

// Context
import { Context } from '../../context/UserContext';
import { useContext } from 'react';


function UserCard() {
  const [user, setUser] = useState({})
  const [token] = useState(localStorage.getItem('token') || '')
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { authenticated, logout } = useContext(Context)
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    api.get('users/checkuser',{
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`
    }
  })
  .then((response) => {
    setUser(response.data)
  }).catch((error) => {
    console.log(error)
  })}, [token])

  return (
    <div className="action">
      <div onClick={toggleMenu}>
      <img
        src={
          `${process.env.REACT_APP_API}/images/users/${user.imageName}`
        }
        alt={user.imageName}
        className="profile" 
      />
      </div>
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <h3>{user.name}<br/><span>Administrador</span></h3>
        <ul>
          <li>
            <BsFillPersonFill className="icon" />
            <Link to="/profile">Meu Perfil</Link>
          </li>
          <li>
            <BsPencilSquare className="icon" />
            <Link to="/edituser">Editar Perfil</Link>
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
            <Link onClick={logout}>Sair</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserCard;
