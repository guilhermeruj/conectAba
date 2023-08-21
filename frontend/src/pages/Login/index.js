import './LoginForm2.css';
import Inputs from '../../components/Inputs';
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import LogoConnect from './Logo_Connect_ABA.png';
import { IoIosLock, IoIosPerson, IoIosEye, IoIosEyeOff } from 'react-icons/io';

// Context
import { Context } from '../../context/UserContext';

function Login(){
  const [user, setUser] = useState({});
  const { login } = useContext(Context)

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleChange(e) {
    setUser({...user, [e.target.name]: e.target.value}); 
    
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login(user);
    } catch (error) {
      console.error('Erro no login:', error);
      // Recarregar a página em caso de erro
      window.location.reload();
    }
  }

  return (
    <div className="container-login">
      <div className="row">
        <div className="col-12">
          <div className="login-article">
            <div className="center">
              {/* <img src="http://placehold.it/250x100&text=Logo" alt="logo" /> */}
              <img
                src={LogoConnect}
                alt="Logo"
              />
            </div>
            <form onSubmit={handleSubmit} className="login-form" >
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <IoIosPerson />
                  </span>
                  <input
                    name='email'
                    placeholder="E-mail"
                    type="email"
                    className="form-control"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <IoIosLock />
                  </span>
                  <input
                    name='password'
                    placeholder="Digite aqui sua senha.."
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    value={user.password}
                    onChange={handleChange}
                    required
                  />
                  <span className="input-group-addon">
                    <button
                      type="button"
                      className="password-toggle-btn"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                    </button>
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="UserRememberMe">
                  <input type="checkbox" name="data[User][remember_me]" />{' '}
                  Lembrar-me?
                </label>
              </div>
              <div className="form-group btn-block center">
                <input
                  type="submit"
                  value="Logar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


    // <div className="container-login">
    //   <div className="card-login style-cards">
    //     <form className='row form-login' onSubmit={handleSubmit}>
    //       <div className="logo-container">
    //         <img
    //         className="logo-img"
    //         src={LogoConnect}
    //         alt="Logo"
    //         />
    //       </div>
          
    //       <h5 className='form-label'>Acessar </h5>
    //       <Inputs
    //         label="Email:"
    //         type="email"
    //         name="email"
    //         placeholder="Digite aqui seu email.."
    //         handleOnChange={handleChange}
    //       />
    //       <Inputs
    //         label="Senha:"
    //         type="password"
    //         name='password'
    //         placeholder="Digite aqui sua senha.."
    //         handleOnChange={handleChange}
    //       />
          
    //       <div className='col-12 mt-3 mb-3'>
    //       <Inputs type="submit" value="Logar" className="custom-button"/> 
    //       </div>
    //       <div>
    //         Esqueceu sua senha??<Link to="/search-user"> <span>recuperar senha!</span> </Link> 
    //       </div>
         
    //     </form>
    //   </div>
    // </div>
  );  
};

export default Login;
