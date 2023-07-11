import React, { useState } from 'react';
import './style.css';
import Input from '../../components/input';
// import Select from '../../components/select';
import SubmitLink from '../../components/SubmitLink';

function Register(){
    const [user, setUser] = useState('')
    // Creation of the Registration Object
    function handleOnChage(e){
        setUser({...user, [e.target.name]: e.target.value});    
    };
    // Function to submit the registration
    function handleSubmit(e){
        e.preventDefault()
        // enviar o usuario para o banco de dados
    }

  return (
    <div className='card-2'>
    {/* <div className='shape'></div>     */}
        <form className='row' onSubmit={handleSubmit}>
            <h3 className='col-12'>Formulário de Cadastro</h3>
            <Input
                label="Nome Completo"
                type="text"
                name="name"
                placeholder="Digite o nome completo"
                handleOnChage={handleOnChage}
            />
            <Input
                label="Email"
                type="email"
                name="email"
                placeholder="Digite o email"
                handleOnChage={handleOnChage}
            />
            <Input
                label="CPF"
                type="text"
                name="cpf"
                placeholder="Digite o CPF"
                handleOnChage={handleOnChage}
            />
            <Input
                label="RG"
                type="text"
                name="rg"
                placeholder="Digite o RG"
                handleOnChage={handleOnChage}
            />
            <Input
                label="Telefone"
                type="text"
                name="fone"
                placeholder="Digite o telefone"
                handleOnChage={handleOnChage}
            />
            
            <Input
                label="Senha"
                type="password"
                name="password"
                placeholder="Digite a senha"
                handleOnChage={handleOnChage}
            />
            <Input
                label="Confirme a senha"
                type="password"
                name="confirmpassword"
                placeholder="Digite a senha novamente"
                handleOnChage={handleOnChage}
            />
            <div className='col-12'>
                <SubmitLink/>
            </div>
        </form> 
    </div>
  );
};

export default Register;
