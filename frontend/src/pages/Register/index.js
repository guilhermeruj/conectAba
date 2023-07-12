import React, { useContext, useState } from 'react';
import './registerModule.css';
import Inputs from '../../components/input';
import Select from '../../components/select';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Context } from '../../context/UserContext';


function Register(){
    const [user, setUser] = useState('')
    const { register } = useContext(Context)
    // Creation of the Registration Object
    function handleOnChage(e){
        setUser({...user, [e.target.name]: e.target.value});    
    };
    // Function to submit the registration
    function handleSubmit(e){
        e.preventDefault()
        // enviar o usuario para o banco de dados
        register(user)
        
    }

  return (
    <div className='container'> 
        <div className='card-2'>
            <form className='row' onSubmit={handleSubmit}>
                <h5 className='col-12 text-center'>Formulário de Cadastro</h5>
                <div className='col-6'>
                <Inputs
                    label="Nome Completo"
                    type="text"
                    name="name"
                    placeholder="Digite o nome completo"
                    handleOnChage={handleOnChage}
                />
                </div>
                <div className='col-6'>
                <Inputs
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Digite o email"
                    handleOnChage={handleOnChage}
                />
                </div>
                <div className='col-4'>
                <Inputs
                    label="CPF"
                    type="text"
                    name="cpf"
                    placeholder="Digite o CPF"
                    handleOnChage={handleOnChage}
                />
                </div>
                <div className='col-4'>
                <Inputs
                    label="RG"
                    type="text"
                    name="rg"
                    placeholder="Digite o RG"
                    handleOnChage={handleOnChage}
                />
                </div>
                <div className='col-4'>
                <Inputs
                    label="CNPJ"
                    type="number"
                    name="cnpj"
                    placeholder="Digite o CNPJ"
                    handleOnChage={handleOnChage}
                />
                </div>
                <div className='col-12'>
                <Inputs
                    label="Telefone Pessoal"
                    type="number"
                    name="fone"
                    placeholder="Digite o seu telefone"
                    handleOnChage={handleOnChage}
                />
                </div>
                <div className='col-6'>
                <Inputs
                    label="Nome do contato de emergência"
                    type="text"
                    name="emergency_name"
                    placeholder="Nome do contato de emergência"
                    handleOnChage={handleOnChage}
                />
                </div>
                <div className='col-6'>
                <Inputs
                    label="Telefone Emergência"
                    type="number"
                    name="emergency_number"
                    placeholder="Digite o telefone de emergêrncia"
                    handleOnChage={handleOnChage}
                />
                </div>
                <div className='col-6'>  
                <Inputs
                    label="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite a senha"
                    handleOnChage={handleOnChage}
                />
                </div>  
                <div className='col-6'> 
                <Inputs
                    label="Confirme a senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="Digite a senha novamente"
                    handleOnChage={handleOnChage}
                />
                </div>
                <div className='col-6'>
                <Select
                    label="Selecione o nível de acesso"
                    name="mySelect"
                    options={[
                        { name: "option1", label: "Opção 1" },
                        { name: "option2", label: "Opção 2" },
                        { name: "option3", label: "Opção 3" },
                    ]}
                />
                </div>
                <div className='col-6'>
                    <Inputs type="submit" value="Cadastrar" className="custom-button"/> 
                </div>
            </form> 
        </div>
    </div>
  );
};

export default Register;