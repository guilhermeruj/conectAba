import React, { useState } from 'react';
import './loginModule.css';
import '../../style.css';
import Inputs from '../../components/input';
import SubmitLink from '../../components/SubmitLink';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Adicionar a lógica de autenticação
    // Verifique se o CPF e a senha são válidos e autentique o usuário
    // Por exemplo, você pode enviar uma solicitação ao backend para verificar as credenciais

    if (email === '12345678900' && senha === 'senha123') {
      // Login bem-sucedido, faça alguma ação, como redirecionar para a página principal
      console.log('Login bem-sucedido!');
    } else {
      // Credenciais inválidas, mostre uma mensagem de erro
      console.log('Credenciais inválidas!');
    }
  };

  return (
    <div className="card-1">
      <form>
        <h3>Conect-ABA Login </h3>
        <Inputs
          label="Email"
          type="text"
          placeholder="Digite aqui seu email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Inputs
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha.."
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        
        <SubmitLink/>
        
      </form>
    </div>
  );  
};

export default Login;
