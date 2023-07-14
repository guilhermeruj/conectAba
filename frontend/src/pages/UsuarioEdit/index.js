import React, { useContext, useState } from 'react';
import Inputs from '../../components/input';
import 'bootstrap/dist/css/bootstrap.min.css';
import './usuarioModule.css'

import { Context } from '../../context/UserContext';


function UserPage() {
  const [user, setUser] = useState({});
  const { updateUser } = useContext(Context);

  // Função para atualizar os campos do usuário
  function handleOnChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  // Função para lidar com o envio do formulário de atualização
  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    // Enviar os dados atualizados do usuário para o banco de dados
    updateUser(user);
  }

  return (
    <div className='container-user'>
      <div className='card-user style-cards'>
        <form className='row' onSubmit={handleSubmit}>
          <h5 className='col-12 text-center form-label'>Atualizar Informações</h5>
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
          <div className='col-12'><hr /></div>
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
              placeholder="Digite o telefone de emergência"
              handleOnChange={handleOnChange}
            />
          </div>
          <div className='col-12'><hr /></div>
          <div className='col-6'>
            <Inputs
              label="Número Registro Profissional:"
              type="text"
              name="numeroRegistroProfissional"
              placeholder="Digite o número de registro profissional"
              handleOnChange={handleOnChange}
            />
          </div>

          <div className='col-6'>
            <Inputs
              label="Número da Carteira de Vacinação:"
              type="text"
              name="numeroCarteiraVacinação"
              placeholder="Digite o número da carteira de vacinação"
              handleOnChange={handleOnChange}
            />
          </div>
          <div className='col-12'><hr /></div>
          <div className='col-12'>
            <label>Diplomas:</label>
            <div className="">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  name="uploadDiplomas"
                  onChange={handleOnChange}
                />
              </div>
            </div>
         </div>
         <div className='col-12'><hr /></div>
         <div className="col-12 mt-4">
              <div className="d-flex justify-content-center">
                  <div className="col-4">
                      <Inputs type="submit" value="Atualizar" className="custom-button"/> 
                  </div>
              </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserPage;
