import './loginModule.css';
import Inputs from '../../components/input';
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";

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
        <form className='row' onSubmit={handleSubmit}>
          <h3 className='form-label'>Conect-ABA Login </h3>
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
          
          <div className='col-12'>
          <Inputs type="submit" value="Logar" className="custom-button"/> 
          </div>
         Esqueceu sua senha??<Link to="/search-user"> <span>recuperar senha!</span> </Link> 
        </form>
      </div>
    </div>
  );  
};

export default Login;
