// import React, { useState } from 'react';
import './loginModule.css';
import Inputs from '../../components/input';

function Login(){
  // const [email, setEmail] = useState('');
  // const [senha, setSenha] = useState('');

  function handleLogin() {
    // Adicionar a lógica de autenticação
    // Verifique se o CPF e a senha são válidos e autentique o usuário
    // Por exemplo, você pode enviar uma solicitação ao backend para verificar as credenciais
  };

  return (
    <div className="container-login">
      <div className="card-login style-cards">
        <form className='row'>
          <h3 className='form-label'>Conect-ABA Login </h3>
          <Inputs
            label="Email:"
            type="text"
            name="email"
            placeholder="Digite aqui seu email.."
            onChange={handleLogin}
          />
          <Inputs
            label="Senha:"
            type="password"
            name='password'
            placeholder="Digite aqui sua senha.."
            onChange={handleLogin}
          />
          
          <div className='col-12'>
              <Inputs type="submit" value="Logar" className="custom-button"/> 
          </div>
          
        </form>
      </div>
    </div>
  );  
};

export default Login;
