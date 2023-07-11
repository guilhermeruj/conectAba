// import React, { useState } from 'react';
import './style.css';
import Input from '../../components/input';
// import Select from '../../components/select';
import SubmitLink from '../../components/SubmitLink';

function Register(){
function handleOnChage(e){};

  return (
    <div className='card-2'>
    {/* <div className='shape'></div>     */}
        <form className='row'>
            <h3 className='col-12'>Formulário de Cadastro</h3>
            <Input
                label="Nome Completo"
                type="text"
                name="name"
                placeholder="Digite o nome completo"
                handleOnChage={handleOnChage}
                className='col-6'
            />
            <Input
                label="Email"
                type="email"
                name="email"
                placeholder="Digite o email"
                handleOnChage={handleOnChage}
                className='col-6'
            />
            <Input
                label="CPF"
                type="text"
                name="cpf"
                placeholder="Digite o CPF"
                handleOnChage={handleOnChage}
                className='col-4'
            />
            <Input
                label="RG"
                type="text"
                name="rg"
                placeholder="Digite o RG"
                handleOnChage={handleOnChage}
                className='col-4'
            />
            <Input
                label="Telefone"
                type="text"
                name="fone"
                placeholder="Digite o telefone"
                handleOnChage={handleOnChage}
                className='col-4'
            />
            
            <Input
                label="Senha"
                type="password"
                name="password"
                placeholder="Digite a senha"
                handleOnChage={handleOnChage}
                className='col-6'
            />
            <Input
                label="Confirme a senha"
                type="password"
                name="confirmpassword"
                placeholder="Digite a senha novamente"
                handleOnChage={handleOnChage}
                className='col-6'
            />
            <div className='col-12'>
                <SubmitLink/>
            </div>
        </form> 
    </div>
  );
};

export default Register;
