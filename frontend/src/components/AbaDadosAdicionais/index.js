import React from 'react';
import './abaAdicionaisModules.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function AbaDadosAdicionais() {

  const dadosDoBancoDeDados = [
    {
      categoria: 'Diploma',
      nomeDado: 'Psicologia',
      descricaoDado: 'Descrição do dado 1',
      arquivoUpado: 'arquivo1.pdf',
    },
    {
      categoria: 'Certificado',
      nomeDado: 'Analista Comportamental',
      descricaoDado: 'Descrição do dado 2',
      arquivoUpado: 'arquivo2.docx',
    },
    {
      categoria: 'Contratos',
      nomeDado: 'Nome/Título do dado 3',
      descricaoDado: 'Descrição do dado 3',
      arquivoUpado: 'arquivo2.docx',
    },
    // Adicione mais objetos para mais dados do banco de dados, se necessário
  ];
  
  return (
    <div className="row  profile-adicional-container">
      {dadosDoBancoDeDados.map((dado, index) => (
        <div key={index} className="col-md-12 dados-adicionais-container">
          <div className="categoria-title">{dado.categoria} - {dado.nomeDado}</div>

          {/* Utilizamos o textarea para a descrição do dado */}
          <div className="col-md-12 descricao-dado">
            <label htmlFor={`descricao-dado-${index}`}>Descrição:</label>
            <textarea
              id={`descricao-dado-${index}`}
              className="form-control"
              rows="3"
              value={dado.descricaoDado}
              readOnly
            />
          </div>
          <br />
          <div className="col-md-12 arquivo-upado">Mostrar o arquivo: {dado.arquivoUpado}</div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AbaDadosAdicionais;
