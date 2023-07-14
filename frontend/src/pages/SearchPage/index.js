import React, { useContext, useState } from 'react';
import './searchModules.css';
import Inputs from '../../components/input';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Context } from '../../context/UserContext';

function SearchUser() {
  const [searchQuery, setSearchQuery] = useState('');
  const [userData, setUserData] = useState(null);
  const { register } = useContext(Context);

  function handleSearchQueryChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    // Aqui você pode fazer a lógica para buscar os dados do usuário
    // usando a `searchQuery` e definir os dados retornados em `userData`
    // Exemplo:
    const user = {
      name: 'João Silva',
      email: 'joao@example.com',
      cpf: '123.456.789-00',
      rg: '987654321',
    };
    setUserData(user);
  }

  function handleEditUser() {
    // Aqui você pode adicionar a lógica para redirecionar para a página de edição do usuário
    // Por exemplo, usando o react-router-dom ou qualquer outra biblioteca de roteamento que esteja sendo utilizada
    console.log('Editar usuário');
  }

  return (
    <div className="">
      <div className="container-search">
        <div className="card-search style-cards">
          <form className="row" onSubmit={handleSearchSubmit}>
            <div className="col-12 mb-3">
              <h5 className="text-center form-label">Pesquisar Usuário</h5>
            </div>
            <div className="col-9">
              <Inputs
                type="text"
                name="search"
                placeholder="Digite o nome do usuário"
                value={searchQuery}
                handleOnChange={handleSearchQueryChange}
              />
            </div>
            <div className="col-3">
              <Inputs type="submit" value="Pesquisar" className="custom-button" />
            </div>
          </form>
          {userData && (
            <div className=" user-data mt-3" >
              <h5 className="user-data-title">Dados do Usuário:</h5>
              <p>
                <strong>Nome:</strong> {userData.name}
              </p>
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
              <p>
                <strong>CPF:</strong> {userData.cpf}
              </p>
              <p>
                <strong>RG:</strong> {userData.rg}
              </p>
              <div className="user-data mt-3 d-flex align-items-center">
              <div className="col-3 m-2">
                <Inputs type="submit" value="Editar" className="custom-button" />
              </div>
              <div className="col-3 m-2">
                <Inputs type="submit" value="Ver tudo" className="custom-button" />
              </div>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchUser;
