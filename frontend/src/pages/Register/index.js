import React, { useContext, useState } from 'react';
import './registerModule.css';
import Inputs from '../../components/Inputs';
import Select from '../../components/Select';
import SidebarMenu from '../../components/NovoSideBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Context } from '../../context/UserContext';
import UserCard from '../../components/UserCard';


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
    <div className="container-layout">

      <div className="container-left">
        <SidebarMenu/>
      </div>
      
      <div className="container-right">
        <div className="header">
          <UserCard/>
        </div>
        <div className='container-register '> 
            <div className='card-register style-cards'>
                <form className='row' onSubmit={handleSubmit}>
                    <h5 className='col-md-12 text-center form-label mb-4'>Formulário de Cadastro</h5>
                    <div className='col-md-4'>
                    <Inputs
                        label="Nome:"
                        type="text"
                        name="name"
                        placeholder="Digite o nome completo"
                        handleOnChange={handleOnChange}
                    />
                    </div>
                    <div className='col-md-4'>
                    <Inputs
                        label="Sobrenome:"
                        type="text"
                        name="sobrenome"
                        placeholder="Digite o sobrenome"
                        handleOnChange={handleOnChange}
                    />
                    </div>
                    <div className='col-md-4'>
                    <Inputs
                        label="Email:"
                        type="email"
                        name="email"
                        placeholder="Digite o email"
                        handleOnChange={handleOnChange}
                    />
                    </div>
                    <div className='col-md-4'>
                    <Inputs
                        label="CPF:"
                        type="text"
                        name="cpf"
                        placeholder="Digite o CPF"
                        handleOnChange={handleOnChange}
                        mask="999.999.999-99"
                    />
                    </div>
                    <div className='col-md-4'>
                    <Inputs
                        label="RG:"
                        type="number"
                        name="rg"
                        placeholder="Digite o RG"
                        handleOnChange={handleOnChange}
                        mask="99.999.999-9"
                    />
                    <span  style={{ color: '#a5a5a5', fontSize: '12px' }}>Estados de <span style={{ color: 'red',fontSize: '14px' }}>SP</span> e <span style={{ color: 'red', fontSize: '14px' }}>RJ</span> ainda contam com dígito verificador, totalizando <span style={{ color: 'red', fontSize: '14px' }}>9</span> dígitos.</span>

                    </div>
                    
                    <div className='col-md-4'>
                    <Inputs
                        label="CNPJ:"
                        type="number"
                        name="cnpj"
                        placeholder="Digite o CNPJ"
                        handleOnChange={handleOnChange}
                        mask="99.999.999/9999-99"
                    />
                    </div>
                    <div className='col-md-12'><hr/></div>
                    <div className='col-md-6'>
                    <Inputs
                        label="Telefone Pessoal:"
                        type="number"
                        name="fone"
                        placeholder="Digite o seu telefone"
                        handleOnChange={handleOnChange}
                    />
                    </div>
                    <div className='col-md-6'>
                    <Inputs
                        label="Telefone Emergência:"
                        type="number"
                        name="contatoemergencia"
                        placeholder="Digite o telefone de emergêrncia"
                        handleOnChange={handleOnChange}
                    />
                    </div>
                
                    <div className='col-md-12'>
                    <hr />
                    <Select
                        label="Nível de acesso:"
                        name="nivel"
                        options={[
                            { value: "diretor", label: "Diretor Master" },
                            { value: "graficos", label: "Monitor Gráficos" },
                            { value: "at", label: "Aplicador Terapêutico" },
                            { value: "superisor", label: "Supervisor" },
                            { value: "coordenador", label: "Coordenador" },
                            { value: "at", label: "Aplicador Terapêutico" },
                            { value: "administrativo", label: "Administrativo" },
                            { value: "financeiro", label: "Financeiro" },
                        ]}
                        onChange={handleOnChange}
                        value={user.nivel}
                    />
                    <hr/>
                    </div>
                    <div className='col-md-6'>  
                    <Inputs
                        label="Senha:"
                        type="password"
                        name="password"
                        placeholder="Digite a senha"
                        handleOnChange={handleOnChange}
                    />
                    </div>  
                    <div className='col-md-6'> 
                    <Inputs
                        label="Confirme a senha:"
                        type="password"
                        name="confirmpassword"
                        placeholder="Digite a senha novamente"
                        handleOnChange={handleOnChange}
                    />
                    </div>
                    <div className="col-md-12 mt-4">
                        <div className="d-flex justify-content-center">
                            <div className="col-md-12">
                                <Inputs type="submit" value="Cadastrar" className="botao-btn"/> 
                            </div>
                        </div>
                    </div>
                </form> 
            </div>
        </div>
      </div>

      <div className="footer">

      </div>
    </div>
  );
};

export default Register;