import React, { useState } from 'react';
import '../Cadastro/style.css';
import Input from '../../components/input';
import Select from '../../components/select';
import Button from '../../components/botao';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nivel, setNivel] = useState('user');

  const handleCadastro = () => {
    // Aqui você pode adicionar a lógica para enviar os dados de cadastro para a rota adequada
    // Por exemplo, fazer uma requisição POST para a API com os dados do formulário

    // Após o cadastro ser realizado com sucesso, você pode redirecionar para a página desejada
    // history.push('/sucesso');
    console.log('Cadastro realizado com sucesso!');
  };

  return (
    <div className='container'>
    <div className='shape'></div>    
        <form>
        <h3>Formulário de Cadastro</h3>
        <Input
            label="Nome Completo"
            type="text"
            name="name"
            placeholder="Digite o nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <Input
            label="CPF"
            type="text"
            placeholder="Digite o CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
        />
        <Input
            label="RG"
            type="text"
            placeholder="Digite o RG"
            value={rg}
            onChange={(e) => setRg(e.target.value)}
        />
        <Input
            label="Telefone"
            type="text"
            placeholder="Digite o telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
        />
        <Input
            label="Email"
            type="email"
            placeholder="Digite o email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <Input
            label="Senha"
            type="password"
            placeholder="Digite a senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Select
            label="Nível de Acesso"
            value={nivel}
            onChange={(e) => setNivel(e.target.value)}
        >
            <option value="user">Usuário</option>
            <option value="adm">Administrador</option>
        </Select>
        <Button onClick={handleCadastro}>Cadastrar</Button>
        </form>
    </div>
  );
};

export default Cadastro;
