// import React, { useState } from 'react';
import './style.css';
import Input from '../../components/input';
// import Select from '../../components/select';
// import Button from '../../components/botao';

function Register(){
function handleOnChage(e){};

  return (
    <div className='container'>
    {/* <div className='shape'></div>     */}
         <form>
        <h3>Formulário de Cadastro</h3>
        <Input
            label="Nome Completo"
            type="text"
            name="name"
            placeholder="Digite o nome completo"
            handleOnChage ={handleOnChage}
        />
        <Input
            label="CPF"
            type="text"
            name="cpf"
            placeholder="Digite o CPF"
            handleOnChage ={handleOnChage }
        />
        <Input
            label="RG"
            type="text"
            name="rg"
            placeholder="Digite o RG"
            handleOnChage ={handleOnChage }
        />
        <Input
            label="Telefone"
            type="text"
            name="fone"
            placeholder="Digite o telefone"
            handleOnChage ={handleOnChage }
        />
        {/*<Input
            label="Email"
            type="email"
            name="email"
            placeholder="Digite o email"
            handleOnChage ={handleOnChage }
        />
        <Input
            label="Senha"
            type="password"
            name="password"
            placeholder="Digite a senha"
            handleOnChage ={handleOnChage }
        />
        <Input
            label="Confirme a senha"
            type="password"
            name="confirmpassword"
            placeholder="Digite a senha novamente"
            handleOnChage ={handleOnChage }
        />
        <Select
            label="Nível de Acesso"
            name="nivel"
            handleOnChage ={handleOnChage }
        >
            <option value="user">Usuário</option>
            <option value="adm">Administrador</option>
        </Select>
        <Button onClick=''>Cadastrar</Button>*/}
        </form> 
    </div>
  );
};

export default Register;
