import React, { useContext, useState } from 'react';
import Inputs from '../../components/input';
import Select from '../../components/select';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profileModule.css';

import { Context } from '../../context/UserContext';

function Profile() {
  const [user, setUser] = useState({});
  const { register } = useContext(Context);

  function handleOnChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    register(user);
  }

  return (
    <div className='container-profile'>
      <div className='card-profile-1'>
        <img
          src='https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg'
          alt='Foto do usuário'
          className='user-avatar'
        />
        <h3 className='text-center'>User name</h3>
        <p className='text-center'>Cargo</p>
      </div>
      <div className='card-profile-2'>
        <h3 className='col-12 text-center mt-3 mb-3'>Dados do Usuário</h3>
        <div className='profile-form-container'>
          <form className='row' onSubmit={handleSubmit}>
            <div className='col-6'>
              <Inputs
                label='Nome Completo:'
                type='text'
                name='name'
                placeholder='Digite o nome completo'
                handleOnChange={handleOnChange}
              />
            </div>
            <div className='col-6'>
              <Inputs
                label='Email:'
                type='email'
                name='email'
                placeholder='Digite o email'
                handleOnChange={handleOnChange}
              />
            </div>
            <div className='col-4'>
              <Inputs
                label='CPF:'
                type='text'
                name='cpf'
                placeholder='Digite o CPF'
                handleOnChange={handleOnChange}
              />
            </div>
            <div className='col-4'>
              <Inputs
                label='RG:'
                type='number'
                name='rg'
                placeholder='Digite o RG'
                handleOnChange={handleOnChange}
              />
            </div>
            <div className='col-4'>
              <Inputs
                label='CNPJ:'
                type='number'
                name='cnpj'
                placeholder='Digite o CNPJ'
                handleOnChange={handleOnChange}
              />
            </div>
            <div className='col-12'><hr />
            </div>
            <div className='col-6'>
              <Inputs
                label='Telefone Pessoal:'
                type='number'
                name='fone'
                placeholder='Digite o seu telefone'
                handleOnChange={handleOnChange}
              />
            </div>
            <div className='col-6'>
              <Inputs
                label='Telefone Emergência:'
                type='number'
                name='contatoemergencia'
                placeholder='Digite o telefone de emergêrncia'
                handleOnChange={handleOnChange}
              />
            </div>
            <div className='col-12'><hr />
              <Select
                label='Nível de acesso:'
                name='nivel'
                options={[
                  { value: 'administrador', label: 'Administrador' },
                  { value: 'graficos', label: 'Gráficos' },
                  { value: 'at', label: 'AT' },
                ]}
                onChange={handleOnChange}
                value={user.nivel}
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
            <div className='col-12 mt-4'>
              <div className='d-flex justify-content-center'>
                <div className='col-6'>
                  <Inputs type='submit' value='Atualizar dados' className='custom-button' />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
