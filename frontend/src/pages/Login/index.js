import './loginModule.css';
import Inputs from '../../components/input';
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import LogoConnect from './Logo_Connect_ABA.png';

// Context
import { Context } from '../../context/UserContext';

function Login(){
  const [user, setUser] = useState({});
  const { login } = useContext(Context)

  function handleChange(e) {
    setUser({...user, [e.target.name]: e.target.value}); 
    
  };
  function handleSubmit(e){
    e.preventDefault()
    login(user)
  }

  return (
    <div className="container-login">
      <div className="card-login style-cards">
        <form className='row form-login' onSubmit={handleSubmit}>
          <div className="logo-container">
            <img
            className="logo-img"
            src={LogoConnect}
            alt="Logo"
            />
          </div>
          
          <h5 className='form-label'>Acessar </h5>
          <Inputs
            label="Email:"
            type="email"
            name="email"
            placeholder="Digite aqui seu email.."
            handleOnChange={handleChange}
          />
          <Inputs
            label="Senha:"
            type="password"
            name='password'
            placeholder="Digite aqui sua senha.."
            handleOnChange={handleChange}
          />
          
          <div className='col-12 mt-3 mb-3'>
          <Inputs type="submit" value="Logar" className="custom-button"/> 
          </div>
          <div>
            Esqueceu sua senha??<Link to="/search-user"> <span>recuperar senha!</span> </Link> 
          </div>
         
        </form>
      </div>
    </div>
  );  
};

export default Login;
