import React, { useState, useEffect } from 'react';
import Inputs from '../../components/input';
import 'bootstrap/dist/css/bootstrap.min.css';
import './usuarioModule.css'
import api from '../../utils/api'

// import { Context } from '../../context/UserContext';

import useFlashMessage from '../../hooks/useFlashMessage';
import RoundedImage from '../../components/RoundedImage';


function UserPage() {
  const [user, setUser] = useState({})
  const [preview, setPreview] = useState()
  const [token] = useState(localStorage.getItem('token') || '')
  const { setFlashMessage } = useFlashMessage()
  
  useEffect(() => {
    api.get('users/checkuser',{
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`
    }
  })
  .then((response) => {
    setUser(response.data)
  }).catch((error) => {
    console.log(error)
  })}, [token])

  function onFileChange(e){
    setPreview(e.target.files[0])
    setUser({...user, [e.target.name]: e.target.files[0]});
  }

  function handleOnChange(e){
    setUser({...user, [e.target.name]: e.target.value});
  }
  async function handleSubmit(e){
    e.preventDefault()

    let msgType = 'success'
    const formData = new FormData()

    await Object.keys(user).forEach((key) =>
      formData.append(key, user[key]) 
    )

    const data = await api.patch(`users/edit/${user.id}`, formData, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
        'Content-Type': 'multpart/form-data'
      }
    })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      msgType = 'error'
      return err.response.data
    })

    setFlashMessage(data.message, msgType)
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
              value={user.name || ""}
            />
          </div>
          <div className='col-6'>
            <Inputs
              label="Email:"
              type="email"
              name="email"
              placeholder="Digite o email"
              handleOnChange={handleOnChange}
              value={user.email || ""}
            />
          </div>
          <div className='col-4'>
            <Inputs
              label="CPF:"
              type="text"
              name="cpf"
              placeholder="Digite o CPF"
              handleOnChange={handleOnChange}
              value={user.cpf || ""}
            />
          </div>
          <div className='col-4'>
            <Inputs
              label="RG:"
              type="number"
              name="rg"
              placeholder="Digite o RG"
              handleOnChange={handleOnChange}
              value={user.rg || ""}
            />
          </div>
          <div className='col-4'>
            <Inputs
              label="CNPJ:"
              type="number"
              name="cnpj"
              placeholder="Digite o CNPJ"
              handleOnChange={handleOnChange}
              value={user.cnpj || ""}
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
              value={user.fone || ""}
            />
          </div>
          <div className='col-6'>
            <Inputs
              label="Telefone Emergência:"
              type="number"
              name="contatoemergencia"
              placeholder="Digite o telefone de emergência"
              handleOnChange={handleOnChange}
              value={user.contatoemergencia || ""}
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
              value={user.contrato || ""}
            />
          </div>

          <div className='col-6'>
            <Inputs
              label="Número da Carteira de Vacinação:"
              type="text"
              name="numeroCarteiraVacinação"
              placeholder="Digite o número da carteira de vacinação"
              handleOnChange={handleOnChange}
              value={user.numeroCarteiraVacinação || ""}
            />
          </div>
          <div className='col-12'><hr /></div>
          <div className='col-12'>
            <label>Imagem:</label>
            <div className="">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  name="image"
                  onChange={onFileChange}
                  value={user.imageImagem || ""}
                />
              </div>
              <div><br></br>
          
          {(user.imageName || preview) && (
            <RoundedImage
                src={
                  preview
                  ? URL.createObjectURL(preview)
                  : `${process.env.REACT_APP_API}/images/users/${user.imageName}`
              }
              alt={user.imageName}
            />
          )}
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
