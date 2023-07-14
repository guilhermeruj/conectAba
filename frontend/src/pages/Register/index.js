import React, { useContext, useState } from 'react';
import './registerModule.css';
import Inputs from '../../components/input';
import Select from '../../components/select';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Context } from '../../context/UserContext';


function Register(){
    const [user, setUser] = useState({})
    const { register } = useContext(Context)
    // Creation of the Registration Object
    function handleOnChange(e){
        setUser({...user, [e.target.name]: e.target.value});    
    };
    // Function to submit the registration
    function handleSubmit(e){
        e.preventDefault()
        console.log(user)
        // enviar o usuario para o banco de dados
        register(user)
    }

  return (
    <div className='container-register '> 
        <div className='card-register style-cards'>
            <form className='row' onSubmit={handleSubmit}>
                <h5 className='col-12 text-center form-label'>Formulário de Cadastro</h5>
                <div className='col-6'>
                <Inputs
                    label="Nome Completo:"
                    type="text"
                    name="name"
                    placeholder="Digite o nome completo"
                    handleOnChange={handleOnChange}
                />
                </div>
                <div className='col-6'>
                <Inputs
                    label="Email:"
                    type="email"
                    name="email"
                    placeholder="Digite o email"
                    handleOnChange={handleOnChange}
                />
                </div>
                <div className='col-4'>
                <Inputs
                    label="CPF:"
                    type="text"
                    name="cpf"
                    placeholder="Digite o CPF"
                    handleOnChange={handleOnChange}
                />
                </div>
                <div className='col-4'>
                <Inputs
                    label="RG:"
                    type="number"
                    name="rg"
                    placeholder="Digite o RG"
                    handleOnChange={handleOnChange}
                />
                </div>
                
                <div className='col-4'>
                <Inputs
                    label="CNPJ:"
                    type="number"
                    name="cnpj"
                    placeholder="Digite o CNPJ"
                    handleOnChange={handleOnChange}
                />
                </div>
                <div className='col-12'><hr/></div>
                <div className='col-6'>
                <Inputs
                    label="Telefone Pessoal:"
                    type="number"
                    name="fone"
                    placeholder="Digite o seu telefone"
                    handleOnChange={handleOnChange}
                />
                </div>
                <div className='col-6'>
                <Inputs
                    label="Telefone Emergência:"
                    type="number"
                    name="contatoemergencia"
                    placeholder="Digite o telefone de emergêrncia"
                    handleOnChange={handleOnChange}
                />
                </div>
               
                <div className='col-12'>
                <hr />
                <Select
                    label="Nível de acesso:"
                    name="nivel"
                    options={[
                        { value: "administrador", label: "Administrador" },
                        { value: "graficos", label: "Gráficos" },
                        { value: "at", label: "AT" },
                    ]}
                    onChange={handleOnChange}
                    value={user.nivel}
                />
                <hr/>
                </div>
                <div className='col-6'>  
                <Inputs
                    label="Senha:"
                    type="password"
                    name="password"
                    placeholder="Digite a senha"
                    handleOnChange={handleOnChange}
                />
                </div>  
                <div className='col-6'> 
                <Inputs
                    label="Confirme a senha:"
                    type="password"
                    name="confirmpassword"
                    placeholder="Digite a senha novamente"
                    handleOnChange={handleOnChange}
                />
                </div>
                <div className="col-12 mt-4">
                    <div className="d-flex justify-content-center">
                        <div className="col-6">
                            <Inputs type="submit" value="Cadastrar" className="custom-button"/> 
                        </div>
                    </div>
                </div>
            </form> 
        </div>
    </div>
  );
};

export default Register;