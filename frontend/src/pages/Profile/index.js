import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profileModule.css';

function Profile() {
  // Dados fictícios para preencher as informações do usuário
  const userData = {
    name: 'Nome do Usuário',
    email: 'email@example.com',
    cpf: '123.456.789-00',
    rg: '987654321',
    cnpj: '12.345.678/0001-90',
    fone: '123456789',
    contatoemergencia: '987654321',
    nivel: 'administrador',
    numeroRegistroProfissional: '1234567890',
    numeroCarteiraVacinação: 'ABCDEFGHIJ',
  };

  return (
    <div className='container-profile'>
      <div className='card-profile-1'>
        <img
          src='https://static.vecteezy.com/ti/vetor-gratis/p1/9734564-default-avatar-profile-icon-of-social-media-user-vetor.jpg'
          alt='Foto do usuário'
          className='user-avatar'
        />
        <h5 className='text-center'>{userData.name}</h5>
        <p className='text-center'>Função</p>
        <p className='text-center'><strong>Email:</strong> {userData.email}</p>
        <p className='text-center'><strong>Telefone Pessoal:</strong> {userData.fone}</p>
        
        <Link to="/user">
          <button className="custom-button">Editar</button>
        </Link>
        
      </div>
      <div className='card-profile-2'>
        <h3 className='col-12 text-center profile-title'>Dados do Usuário</h3>
        <div className='profile-form-container'>
          <div className='row'>
            <div className='col-6'>
              <p><strong>Nome Completo:</strong> {userData.name}</p>
            </div>
            <div className='col-6'>
              <p><strong>Email:</strong> {userData.email}</p>
            </div>
            <div className='col-4'>
              <p><strong>CPF:</strong> {userData.cpf}</p>
            </div>
            <div className='col-4'>
              <p><strong>RG:</strong> {userData.rg}</p>
            </div>
            <div className='col-4'>
              <p><strong>CNPJ:</strong> {userData.cnpj}</p>
            </div>
            <div className='col-12'><hr /></div>
            <div className='col-6'>
              <p><strong>Telefone Pessoal:</strong> {userData.fone}</p>
            </div>
            <div className='col-6'>
              <p><strong>Telefone Emergência:</strong> {userData.contatoemergencia}</p>
            </div>
            <div className='col-12'><hr /></div>
            <div className='col-12'>
              <p><strong>Nível de acesso:</strong> {userData.nivel}</p>
            </div>
            <div className='col-12'><hr /></div>
            <div className='col-6'>
              <p><strong>Número Registro Profissional:</strong> {userData.numeroRegistroProfissional}</p>
            </div>
            <div className='col-6'>
              <p><strong>Número da Carteira de Vacinação:</strong> {userData.numeroCarteiraVacinação}</p>
            </div>
            <div className='col-12'><hr /></div>
            <div className='col-12'>
              <label>Diplomas:</label>
              <div className=''>
                <p>Upload de diplomas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
