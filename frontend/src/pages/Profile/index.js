import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profileModule.css';
import api from '../../utils/api';
import { useState, useEffect } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import RoundedImage from '../../components/RoundedImage';
import AbaDadosAdicionais from '../../components/AbaDadosAdicionais';

function Profile() {
  const [user, setUser] = useState({});
  const [token] = useState(localStorage.getItem('token') || '');
  const [mostrarAbaUsuario, setMostrarAbaUsuario] = useState(true);
  const [activeTab, setActiveTab] = useState('dados'); // Estado para controlar a aba ativa

  useEffect(() => {
    api.get('users/checkuser', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  const userData = {
    name: user.name,
    email: user.email,
    cpf: user.cpf,
    rg: user.rg,
    cnpj: user.cnpj,
    fone: user.fone,
    contatoemergencia: user.contatoemergencia,
    nivel: user.nivel,
    numeroRegistroProfissional: user.certificado,
    numeroCarteiraVacinação: user.cartaovacina,
    imagemPerfil: user.imageName,
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className='container-profile'>
      <div className='card-profile-1'>
        <RoundedImage
          src={`${process.env.REACT_APP_API}/images/users/${userData.imagemPerfil}`}
          alt={user.imageName}
        />
        <h5 className='text-center'>{userData.name}</h5>
        <strong className='LabelNivel'>{userData.nivel}</strong>
        <br></br>
        <Link to='/user'>
          <button className='custom-button'>Editar Perfil</button>
        </Link>
      </div>

      <div class='card-profile-2'>
        <ul class='nav nav-pills' role='tablist'>
          <li class='nav-item'>
            <a
              class={`nav-link ${activeTab === 'dados' ? 'active' : ''}`}
              onClick={() => handleTabChange('dados')}
              data-toggle='pill'
              href='#dados'
            >
              Dados Usuario
            </a>
          </li>
          <li class='nav-item'>
            <a
              class={`nav-link ${activeTab === 'docs' ? 'active' : ''}`}
              onClick={() => handleTabChange('docs')}
              data-toggle='pill'
              href='#docs'
            >
              Documentos
            </a>
          </li>
        </ul>

        <div class='tab-content'>
          <div
            id='dados'
            class={`container tab-pane ${activeTab === 'dados' ? 'active' : 'fade'}`}
          >
            <div className='row'>
              <div className='col-12'>
                <p>
                  <strong className='LabelName'>{userData.name}</strong>
                  <br></br>
                  <strong className='LabelNivel'>{userData.nivel}</strong>
                </p>
                <hr />
              </div>
              <div className='col-12'>
                <p>
                  <strong className='colorLabel'>Email:</strong> {userData.email}
                </p>
              </div>
              <div className='col-4'>
                <p>
                  <strong className='colorLabel'>CPF:</strong> {userData.cpf}
                </p>
              </div>
              <div className='col-4'>
                <p>
                  <strong className='colorLabel'>RG:</strong> {userData.rg}
                </p>
              </div>
              <div className='col-4'>
                <p>
                  <strong className='colorLabel'>CNPJ:</strong> {userData.cnpj}
                </p>
              </div>
              <div className='col-12'>
                <hr />
              </div>
              <div className='col-6'>
                <p>
                  <strong className='colorLabel'>Telefone Pessoal:</strong> {userData.fone}
                </p>
              </div>
              <div className='col-6'>
                <p>
                  <strong className='colorLabel'>Telefone Emergência:</strong>{' '}
                  {userData.contatoemergencia}
                </p>
              </div>
              <div className='col-12'>
                <hr />
              </div>
              <div className='col-6'>
                <p>
                  <strong className='colorLabel'>Número Registro Profissional:</strong>{' '}
                  {userData.numeroRegistroProfissional}
                </p>
              </div>
              <div className='col-6'>
                <p>
                  <strong className='colorLabel'>Número da Carteira de Vacinação:</strong>{' '}
                  {userData.numeroCarteiraVacinação}
                </p>
              </div>
              <div className='col-12'></div>
            </div>
          </div>
          <div
            id='docs'
            class={`container tab-pane ${activeTab === 'docs' ? 'active' : 'fade'}`}
          >
            <div className='row aba-2'>
              <hr />
              <AbaDadosAdicionais />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
