import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnamneseForm.css';
import Inputs from '../Inputs';
import InputMask from 'react-input-mask';


function AnamneseForm() {
  const [addressData, setAddressData] = useState({});
  const [cep, setCep] = useState('');

  useEffect(() => {
    if (cep.length === 10) { // Verifica se o CEP está completo (formato: 99.999-999)
      fetchAddressData();
    }
  }, [cep]);

  const fetchAddressData = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`);
      setAddressData(response.data);
    } catch (error) {
      console.error(error);
    }
  };


    const [formData, setFormData] = useState({});

    const [selectedSex, setSelectedSex] = useState(''); // Estado para armazenar o sexo selecionado

    const handleSexChange = (event) => {
      setSelectedSex(event.target.value);
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aqui você pode fazer algo com os dados do formulário, como enviá-los para o servidor
      console.log(formData);
    };

  return (
    <div className="anamnese-container">
      <h3>ANAMNESE INFANTIL</h3>
      <form onSubmit={handleSubmit} className="row anamnese-form">
        
        <section className="row section-0">
          {/* Campos para identificação */}
          <div className=" col-md-12 input-container">
            <input 
            type="text" 
            name="name" 
            placeholder="Nome do Paciente" 
            className="input-field"
            />

            <label className="input-label">Nome:</label>

            <span className="input-highlight"></span>
          </div>

          <div className="col-md-12 input-container">
            <input 
            type="text" 
            name="name" 
            placeholder="Psicóloga" 
            className="input-field"
            />

            <label className="input-label">Psicóloga:</label>

            <span className="input-highlight"></span>
          </div>

          <div className="col-md-12 input-container">
            <input 
            type="date" 
            name="date" 
            placeholder="Data" 
            className="input-field"
            />

            <label className="input-label">Data:</label>

            <span className="input-highlight"></span>
          </div>

          <div className="col-md-12 input-container">
            <input 
            type="text" 
            name="name" 
            placeholder="Responsável (s) em responder à Anamnese" 
            className="input-field"
            />

            <label className="input-label">Responsável:</label>

            <span className="input-highlight"></span>
          </div>

        </section>

        <hr className="mt-2 mb-5"/>


        {/* Seção 1: IDENTIFICAÇÃO DA CRIANÇA */}
        <section className="row section-1">
          {/* Campos para identificação */}
            <h5>1. Identificação da Criança</h5>
            <label className="input-label">Sexo:</label>
            <div className="radio-group mb-3">
              <label className="radio-label">
                <input
                  type="radio"
                  name="sex"
                  value="Feminino"
                  checked={selectedSex === 'Feminino'}
                  onChange={handleSexChange}
                />
                <span className="radio-button"></span>
                Feminino
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="sex"
                  value="Masculino"
                  checked={selectedSex === 'Masculino'}
                  onChange={handleSexChange}
                />
                <span className="radio-button"></span>
                Masculino
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="sex"
                  value="Não especificar"
                  checked={selectedSex === 'Não especificar'}
                  onChange={handleSexChange}
                />
                <span className="radio-button"></span>
                Não especificar
              </label>
            </div>

            <div className="col-md-3  input-container">
              <input 
              type="date" 
              name="date" 
              placeholder="Data de nascimento" 
              className="input-field"
              />

              <label className="input-label">Data de nascimento:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-4 input-container">
              <input 
              type="number" 
              name="idade" 
              placeholder="Idade" 
              className="input-field"
              />

              <label className="input-label">Idade:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-2 input-container">
              <input 
              type="text" 
              name="religiao" 
              placeholder="Religião" 
              className="input-field"
              />

              <label className="input-label">Religião:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-4 input-container">
              <InputMask
                mask="999.999.999-99"
                name="cpf"
                placeholder="CPF"
                className="input-field"
              />

              <label className="input-label">CPF:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-4 input-container">
              <InputMask
                mask="99.999.999-9"
                name="rg"
                placeholder="RG"
                className="input-field"
              />

              <label className="input-label">RG:</label>

              <span className="input-highlight"></span>
              
            </div>

            <div className=" col-md-3 input-container">
              <InputMask
                mask="99.999-999"
                name="cep"
                placeholder="CEP"
                className="input-field"
                onChange={(e) => setCep(e.target.value)}
              />

              <label className="input-label">CEP:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-4 input-container">
              <input 
              type="text" 
              name="cidade" 
              placeholder="Cidade" 
              className="input-field"
              value={addressData.localidade || ''}
              />

              <label className="input-label">Cidade:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-2 input-container">
              <input 
              type="text" 
              name="uf" 
              placeholder="Estado" 
              className="input-field"
              value={addressData.uf || ''}
              />

              <label className="input-label">Estado:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-8 input-container">
              <input 
              type="text" 
              name="endereco" 
              placeholder="Endereço" 
              className="input-field"
              value={addressData.logradouro || ''}
              />

              <label className="input-label">Endereço:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-2 input-container">
              <input 
              type="number" 
              name="numeroResidencial" 
              placeholder="Nº" 
              className="input-field"
              />

              <label className="input-label">Numero:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-5 input-container">
              <input 
              type="text" 
              name="bairro" 
              placeholder="Bairro" 
              className="input-field"
              value={addressData.bairro || ''}
              />

              <label className="input-label">Bairro:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-5 input-container">
              <input 
              type="text" 
              name="complemento" 
              placeholder="Complemento" 
              className="input-field"
              />

              <label className="input-label">Complemento:</label>

              <span className="input-highlight"></span>
            </div>


            {/* Dados do Pai */}
            <hr className="mt-2 mb-4"/>

            <div className=" col-md-12 input-container">
              <input 
              type="text" 
              name="namePai" 
              placeholder="Nome do Pai" 
              className="input-field"
              />

              <label className="input-label">Nome do Pai:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-5 input-container">
              <InputMask
                mask="999.999.999-99"
                name="cpf"
                placeholder="CPF"
                className="input-field"
              />

              <label className="input-label">CPF:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-5 input-container">
              <InputMask
                mask="99.999.999-9"
                name="rg"
                placeholder="RG"
                className="input-field"
              />

              <label className="input-label">RG:</label>

              <span className="input-highlight"></span>
              
            </div>

            <div className=" col-md-12 input-container">
              <input 
              type="text" 
              name="profissao" 
              placeholder="Profissão" 
              className="input-field"
              />

              <label className="input-label">Profissão:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-3 input-container">
              <InputMask
                mask="99.999-999"
                name="cep"
                placeholder="CEP"
                className="input-field"
                onChange={(e) => setCep(e.target.value)}
              />

              <label className="input-label">CEP:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-4 input-container">
              <input 
              type="text" 
              name="cidade" 
              placeholder="Cidade" 
              className="input-field"
              value={addressData.localidade || ''}
              />

              <label className="input-label">Cidade:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-2 input-container">
              <input 
              type="text" 
              name="uf" 
              placeholder="Estado" 
              className="input-field"
              value={addressData.uf || ''}
              />

              <label className="input-label">Estado:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-8 input-container">
              <input 
              type="text" 
              name="endereco" 
              placeholder="Endereço" 
              className="input-field"
              value={addressData.logradouro || ''}
              />

              <label className="input-label">Endereço:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-2 input-container">
              <input 
              type="number" 
              name="numeroResidencial" 
              placeholder="Nº" 
              className="input-field"
              />

              <label className="input-label">Numero:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-5 input-container">
              <input 
              type="text" 
              name="bairro" 
              placeholder="Bairro" 
              className="input-field"
              value={addressData.bairro || ''}
              />

              <label className="input-label">Bairro:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-5 input-container">
              <input 
              type="text" 
              name="complemento" 
              placeholder="Complemento" 
              className="input-field"
              />

              <label className="input-label">Complemento:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-4 input-container">
              <input 
              type="email" 
              name="email" 
              placeholder="E-mail" 
              className="input-field"
              />

              <label className="input-label">E-mail:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-3 input-container">
              <InputMask
                mask="(99)99999-9999"
                name="tel"
                placeholder="Telefone"
                className="input-field"
              />

              <label className="input-label">Telefone:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-3 input-container">
              <InputMask
                mask="(99)99999-9999"
                name="cel"
                placeholder="Celular"
                className="input-field"
              />

              <label className="input-label">Celular:</label>

              <span className="input-highlight"></span>
            </div>

            {/* Dados da Mãe */}
            <hr className="mt-2 mb-4"/>

            <div className=" col-md-12 input-container">
              <input 
              type="text" 
              name="nameMae" 
              placeholder="Nome da Mãe" 
              className="input-field"
              />

              <label className="input-label">Nome da Mãe:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-5 input-container">
              <InputMask
                mask="999.999.999-99"
                name="cpf"
                placeholder="CPF"
                className="input-field"
              />

              <label className="input-label">CPF:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-5 input-container">
              <InputMask
                mask="99.999.999-9"
                name="rg"
                placeholder="RG"
                className="input-field"
              />

              <label className="input-label">RG:</label>

              <span className="input-highlight"></span>
              
            </div>

            <div className=" col-md-12 input-container">
              <input 
              type="text" 
              name="profissao" 
              placeholder="Profissão" 
              className="input-field"
              />

              <label className="input-label">Profissão:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-3 input-container">
              <InputMask
                mask="99.999-999"
                name="cep"
                placeholder="CEP"
                className="input-field"
                onChange={(e) => setCep(e.target.value)}
              />

              <label className="input-label">CEP:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-4 input-container">
              <input 
              type="text" 
              name="cidade" 
              placeholder="Cidade" 
              className="input-field"
              value={addressData.localidade || ''}
              />

              <label className="input-label">Cidade:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-2 input-container">
              <input 
              type="text" 
              name="uf" 
              placeholder="Estado" 
              className="input-field"
              value={addressData.uf || ''}
              />

              <label className="input-label">Estado:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-8 input-container">
              <input 
              type="text" 
              name="endereco" 
              placeholder="Endereço" 
              className="input-field"
              value={addressData.logradouro || ''}
              />

              <label className="input-label">Endereço:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-2 input-container">
              <input 
              type="number" 
              name="numeroResidencial" 
              placeholder="Nº" 
              className="input-field"
              />

              <label className="input-label">Numero:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-5 input-container">
              <input 
              type="text" 
              name="bairro" 
              placeholder="Bairro" 
              className="input-field"
              value={addressData.bairro || ''}
              />

              <label className="input-label">Bairro:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-5 input-container">
              <input 
              type="text" 
              name="complemento" 
              placeholder="Complemento" 
              className="input-field"
              />

              <label className="input-label">Complemento:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-4 input-container">
              <input 
              type="email" 
              name="email" 
              placeholder="E-mail" 
              className="input-field"
              />

              <label className="input-label">E-mail:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-3 input-container">
              <InputMask
                mask="(99)99999-9999"
                name="tel"
                placeholder="Telefone"
                className="input-field"
              />

              <label className="input-label">Telefone:</label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-3 input-container">
              <InputMask
                mask="(99)99999-9999"
                name="cel"
                placeholder="Celular"
                className="input-field"
              />

              <label className="input-label">Celular:</label>

              <span className="input-highlight"></span>
            </div>

            <hr className='mt-2 '/>

            <span  style={{ color: '#000', fontSize: '14px' }} > <span style={{ color: 'red',fontSize: '14px' }}>Obs:</span> Todos os dados acima devem ser respondidos, principalmente com os dados da criança e o responsável pelo contrato e emissão de Notas Fiscais.</span>

            <hr className='mt-2 mb-4'/>
            
          <div className='row'>
            <div className=" col-md-12 input-container">
              <span>Casados há quanto tempo?</span>
              <input 
              type="text" 
              name="tempoCasado" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
              <span>Engravidou depois de quanto tempo?</span>
              <input 
              type="text" 
              name="tempoEngravidar" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
              <span>Separados há quanto tempo?</span>
              <input 
              type="text" 
              name="tempoSeparado" 
              className="input-field"
              />

              <label className="input-label"></label>
              
              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-6 input-container">
              <span>Nome da Escola:</span>
              <input 
              type="text" 
              name="nameEscola" 
              className="input-field"
              />

              <label className="input-label"></label>
              
              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-4 input-container">
              <span>Tel: da Escola:</span>

              <InputMask
                mask="(99)99999-9999"
                name="telEscola"
                className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-3 input-container">
              <span>CEP:</span>
              <InputMask
                mask="99.999-999"
                name="cepEscola"
                className="input-field"
                onChange={(e) => setCep(e.target.value)}
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-4 input-container">
              <span>Cidade:</span>
              <input 
              type="text" 
              name="cidadeEscola" 
              className="input-field"
              value={addressData.localidade || ''}
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-2 input-container">
              <span>Estado:</span>
              <input 
              type="text" 
              name="ufEscola" 
              className="input-field"
              value={addressData.uf || ''}
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-8 input-container">
              <span>Endereço:</span>
              <input 
              type="text" 
              name="enderecoEscola" 
              className="input-field"
              value={addressData.logradouro || ''}
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-2 input-container">
              <span>Nº:</span>
              <input 
              type="number" 
              name="numeroEscola" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-5 input-container">
              <span>Bairro:</span>
              <input 
              type="text" 
              name="bairroEscola" 
              className="input-field"
              value={addressData.bairro || ''}
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-5 input-container">
              <span>Turno que estuda:</span>
              <input 
              type="text" 
              name="turnoEstuda" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-6 input-container">
              <span>Nome do (a) professor (a):</span>
              <input 
              type="text" 
              name="nameProfe" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-4 input-container">
              <span>Tel:</span>

              <InputMask
                mask="(99)99999-9999"
                name="telProfe"
                className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-8 input-container">
              <span>Nome do diretor (a) ou coordenador (a):</span>
              <input 
              type="text" 
              name="nameDiretor" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-2 input-container">
              <span>Tel:</span>

              <InputMask
                mask="(99)99999-9999"
                name="telDiretor"
                className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

          </div>

        </section>

        <hr className='mt-2 mb-4'/>

        {/* Seção 2: MOTIVO DA PROCURA PELO TRATAMENTO */}
        <section className="row section-2">
          <h5>2. Motivo da Procura Pelo Tratamento</h5>
          {/* Campos para informações de tratamento */}
          <div className=" col-md-12 input-container">
            <span>Diagnóstico:</span>
              <input 
              type="text" 
              name="diagnostico" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Idade que fechou o diagnóstico:</span>
              <input 
              type="text" 
              name="idadeDiagnostico" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-6 input-container">
            <span>Data que fechou o diagnóstico:</span>
              <input 
              type="date" 
              name="diagnosticoData" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className="col-md-12 input-container">
              <span>Motivo que procurou o tratamento:</span>
              <textarea
                name="motivoTratamento"
                className="input-field"
                rows="4" // Defina o número de linhas desejado
              ></textarea>
              {/* Não é necessário o label vazio */}
              <span className="input-highlight"></span>
            </div>

            <hr className='mt-4 '/>
              <span  style={{ color: '#000', fontSize: '14px' }} > <span style={{ color: 'red',fontSize: '14px' }}>Obs:</span> Nota de Confidencialidade: Este documento é de propriedade da Espaço de Intervenções Comportamentais e pertence ao programa individualizado do cliente. Este documento contém informações confidenciais e privilegiadas. Qualquer uso não autorizado, disseminação ou distribuição é estritamente proibido. Se você não é uma pessoa autorizada para receber este documento, por favor, retorne para a EIC: Avenida Rondon Pacheco, n.º 635; Sala 503 - Maracanã – Uberlândia – Minas Gerais, ou descarte-o de maneira segura.</span>
            <hr className='mt-4 mb-4'/>

            <div className=" col-md-12 input-container">
            <span>Quais terapias já realizou:</span>
              <input 
              type="text" 
              name="terapiasRealizadas" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Quais terapias realiza:</span>
              <input 
              type="text" 
              name="terapiasRealiza" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

        </section>

        <hr className='mt-4 mb-4'/>

        {/* Seção 3: CONCEPÇÃO */}
        <section className="row section-3">
          <h5>3. Concepção</h5>
          {/* Campos para informações de concepção */}
          <div className="form-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Perguntas</th>
                  <th className='choice-yes '>Sim</th>
                  <th className='choice-no choice'>Não</th>
                  <th>Informações</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>A Criança foi planejada e desejada?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input type="text" name="info_planejada"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Ordem de nascimento em relação à criança</td>
                  <td><input type="radio" name="ordem" value="Sim" /></td>
                  <td><input type="radio" name="ordem" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="info_ordem"
                    className="input-field" 
                    />

                  </td>
                </tr>

                <tr>
                  <td>Abortos?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="info_abortos" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Naturais ou provocados? Por quê?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="natural_provocados" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Filhos natimortos: </td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="natimortos" 
                    className="input-field" 

                    />
                    </td>
                </tr>
                
                <tr>
                  <td>Filhos vivos (Quantos)?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="filhos_vivos" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Mortes? Causa das mortes?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="mortes_causas" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>MA criança é adotada?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="adotada" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Com que idade veio para sua família?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="idade_vinda" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Procedimento da adoção</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="procedimento_adocao" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                {/* ... Continue com as outras linhas */}
              </tbody>
            </table>
          </div>
        </section>

        <hr className='mt-4 mb-4'/>

        {/* Seção 4: GESTAÇÃO */}
        <section className="row section-4">
          <h5>4. Gestação</h5>
          {/* Campos para informações de concepção */}
          <div className="form-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Perguntas</th>
                  <th className='choice-yes '>Sim</th>
                  <th className='choice-no choice'>Não</th>
                  <th>Informações</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>Teve dificuldade para engravidar?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="dificuldade_engravidar"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quanto tempo após o casamento?</td>
                  <td><input type="radio" name="ordem" value="Sim" /></td>
                  <td><input type="radio" name="ordem" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="tempo_apos_casamento"
                    className="input-field" 
                    />

                  </td>
                </tr>

                <tr>
                  <td>Teve enjoo? Quando?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="enjoo_quando" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Quanto sentiu a criança mexer?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="quando_mexeu" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Fez pré-natal?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="pre_natal" 
                    className="input-field" 

                    />
                    </td>
                </tr>
                
                <tr>
                  <td>Transfusão de sangue?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="transfusao_sangue" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Tombos?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="tombos" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Doenças? Quais?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="doencas" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Hemorragias?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="hemorragias" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Convulsões?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="convulsoes" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Tomou alguma medicação? Qual?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="medicacao" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Fumou durante a gravidez?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="fumou_gravida" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Fazia uso de bebidas alcoólicas?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="uso_alcool" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Com que frequência?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="frequencia_alcool" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Usou algum tipo de droga? Quais?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="consumiu_droga" 
                    className="input-field" 

                    />
                    </td>
                </tr>

                <tr>
                  <td>Com que frequência?</td>
                  <td><input type="radio" name="abortos" value="Sim" /></td>
                  <td><input type="radio" name="abortos" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="frequancia_droga" 
                    className="input-field" 

                    />
                    </td>
                </tr>


                {/* ... Continue com as outras linhas */}
              </tbody>
            </table>
          </div>
        </section>

        <hr className='mt-4 mb-4'/>

        {/* Seção 5: CONDIÇÕES DE NASCIMENTO */}
        <section className="row section-5">
          <h5>5. Condições de Nascimento</h5>
          {/* Campos para informações de condições de nascimento */}
          <div className="form-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Perguntas</th>
                  <th className='choice-yes '>Sim</th>
                  <th className='choice-no choice'>Não</th>
                  <th>Informações</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>Foi na maternidade?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="foi_maternidade"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Foi em casa?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="foi_em_casa"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quem atendeu?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="quem_atendeu"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Foi parto normal?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="parto_normal"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Fórceps?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="forceps"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Cesariana?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="cesariana"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Prematuro? Qual o peso?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="prematuro_peso"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Chorou logo?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="chorou_logo"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Cor ao nascer: </td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="cor_nasceu"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Teve complicações após o nascimento?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="complicacoes_nascimento"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Fez uso de oxigênio?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="usou_oxigen"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Incubadora?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="incubadora"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Icterícia?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="ictericia?"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Alguém ajudou a cuidar da criança após o nascimento?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="alguem_ajudou_cuidados"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td> Quem?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="quem_ajudou"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quanto tempo?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="quanto_tempo"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Houve participação do pai na hora do parto?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="participacao_pai_parto"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Alguém da família acompanhou a hora do nascimento? </td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="familiar_acompanhou_parto"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Os avós marcaram presença?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="avos_presentes"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Os pais tiveram alguma perca significativa durante a gravidez?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="pais_perca_durante_gravidez"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Os pais trabalhavam fora?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="pais_trabalhavam_fora"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quem foi a primeira pessoa, a saber, da gravidez?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="primeira_pessoa_saber_gravidez"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quem escolheu o nome?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="quem_escolheu_nome"            className="input-field "
                    />

                  </td>
                </tr>

                {/* ... Continue com as outras linhas */}
              </tbody>
            </table>
          </div>
        </section>

        <hr className='mt-4 '/>
              <span  style={{ color: '#000', fontSize: '14px' }} > <span style={{ color: 'red',fontSize: '14px' }}>Obs:</span> Nota de Confidencialidade: Este documento é de propriedade da Espaço de Intervenções Comportamentais e pertence ao programa individualizado do cliente. Este documento contém informações confidenciais e privilegiadas. Qualquer uso não autorizado, disseminação ou distribuição é estritamente proibido. Se você não é uma pessoa autorizada para receber este documento, por favor, retorne para a EIC: Avenida Rondon Pacheco, n.º 635; Sala 503 - Maracanã – Uberlândia – Minas Gerais, ou descarte-o de maneira segura.</span>
        <hr className='mt-4 mb-4'/>

        {/* Seção 6: DESENVOLVIMENTO */}
        <section className="row section">
          <h5>6. Desenvolvimento - <span>6.1 Sono</span></h5>
          {/* Subseções para informações de desenvolvimento */}
          <div className="form-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Perguntas</th>
                  <th className='choice-yes '>Sim</th>
                  <th className='choice-no choice'>Não</th>
                  <th>Informações</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>Dorme bem?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="dorme_bem"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Pula quando dorme?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="pula_quando_dorme"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Baba a noite?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="baba_a_noite"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Fala dormindo?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="fala_dormindo"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Grita durante o sono?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="grita_durante_sono"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Range os dentes?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="range_dentes"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Sonâmbulo?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="sonambulo"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Acorda muito a noite?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="acorda_muito_a_noite"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Acorda quando sonha?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="acorda_quando_sonha"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Tem pesadelo?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="tem_pesadelo"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Levanta as pernas?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="levanta_as_pernas"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Acorda nos pés da cama?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="acorda_nos_pes_da_cama"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Joga as cobertas fora da cama?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="joga_as_cobertas_fora_cama"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Dorme em quarto separado dos pais?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="dorme_em_quarto_separado_dos_pais"         className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Desde que idade?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="desde_que_idade"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>A cama é individual?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="cama_individual"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Dorme com alguém no quarto? Quem?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="dorme_com_alguem_no_quarto"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Acorda e vai para a cama dos pais?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="acorda_e_vai_para_cama_dos_pais"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Atitude dos pais?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="atitude_dos_pais"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Precisa de luz para dormir?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="precisa_de_luz_para_dormir"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Tem enurese?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="tem_enurese"            className="input-field "
                    />

                  </td>
                </tr>

                {/* ... Continue com as outras linhas */}
              </tbody>
            </table>
          </div>
        </section>

        <hr className='mt-4 '/>
              <span  style={{ color: '#000', fontSize: '14px' }} > <span style={{ color: 'red',fontSize: '14px' }}>Obs:</span> Nota de Confidencialidade: Este documento é de propriedade da Espaço de Intervenções Comportamentais e pertence ao programa individualizado do cliente. Este documento contém informações confidenciais e privilegiadas. Qualquer uso não autorizado, disseminação ou distribuição é estritamente proibido. Se você não é uma pessoa autorizada para receber este documento, por favor, retorne para a EIC: Avenida Rondon Pacheco, n.º 635; Sala 503 - Maracanã – Uberlândia – Minas Gerais, ou descarte-o de maneira segura.</span>
        <hr className='mt-4 mb-4'/>

        {/* Seção 6.2: DESENVOLVIMENTO */}
        <section className="row section">
          <h5>6. Desenvolvimento - <span>6.2 Alimentação</span></h5>
          {/* Subseções para informações de desenvolvimento */}
          <div className="form-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Perguntas</th>
                  <th className='choice-yes '>Sim</th>
                  <th className='choice-no choice'>Não</th>
                  <th>Informações</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>Mamou leite materno?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="mamou_leite_materno"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Sucção?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="succao"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Engolia bem?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="engolia_bem"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Vomitava com frequência?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="vomitava_com_frequencia"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quanto tempo foi amamentado com leite materno?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="quanto_tempo_foi_amamentado_com_leite_materno"            
                    className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Mamadeira?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="mamadeira"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quanto tempo tomou mamadeira?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="quanto_tempo_tomou_mamadeira"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Come comida de sal? </td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="como_comida_de_sal"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quando introduziu?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="quando_introduziu"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Houve orientação médica?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="houve_orientacao_medica"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Houve rejeição alimentar?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="houver_rejeicao_alimentar"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Era preciso forçar para comer?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="era_preciso_forcar_para_comer"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Costumava vomitar?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="costumava_vomitar"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Diarreia?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="diarreia"         
                    className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Prisão de ventre?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="prisao_de_ventre"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Recebeu ou recebe ajuda para alimentação?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="recebeu_recebe_ajuda_para_alimentacao"  
                    className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Tem alguma restrição alimentar?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="alguma_restricao_alimentar"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quais?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="quais"            className="input-field "
                    />

                  </td>
                </tr>

                {/* ... Continue com as outras linhas */}
              </tbody>
            </table>
          </div>
        </section>

        {/* Seção 6.3: DESENVOLVIMENTO */}
        <section className="row section">
          <h5>6. Desenvolvimento - <span>6.3 Desenvolvimento Psicomotor</span></h5>
          {/* Subseções para informações de desenvolvimento */}
          <div className="form-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Perguntas</th>
                  <th className='choice-yes '>Sim</th>
                  <th className='choice-no choice'>Não</th>
                  <th>Informações</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>Com que idade sorriu?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="idade_sorriu"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Com que idade fixou a cabeça?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="idade_fixou_a_cabeca"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Com que idade se sentou?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="idade_se_sentou"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Com que idade engatinhou?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="idade_engatinhou"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Com que idade ficou de pé?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="idade_ficou_de_pé"            
                    className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Com que idade andou?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="idade_andou"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Com que idade falou as primeiras palavras?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="idade_falou_primeiras_palavras"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Com que idade falou corretamente?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="idade_falou_corretamente"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Como era estimulado?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="era_estimulado"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Trocou letras?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="trocou_letras"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Gagueja ou gaguejou?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="gagueja_gaguejou"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Controle dos esfíncteres?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="controle_dos_esfincteres"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>É muito agitado?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="muito_agitado"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quais momentos?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="quais_momnetos"         
                    className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>A criança costuma cair muito?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="crianca_costuma_cair_muito"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Recebeu ou recebe ajuda para alimentação?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="recebeu_recebe_ajuda_para_alimentacao"  
                    className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Tem alguma restrição alimentar?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="alguma_restricao_alimentar"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quais?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="quais"            className="input-field "
                    />

                  </td>
                </tr>

                {/* ... Continue com as outras linhas */}
              </tbody>
            </table>
          </div>
        </section>

        {/* Seção 6.5: DESENVOLVIMENTO */}
        <section className="row section">
          <h5>6. Desenvolvimento - <span>6.5 Tiques</span></h5>
          {/* Subseções para informações de desenvolvimento */}
          <div className="form-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Perguntas</th>
                  <th className='choice-yes '>Sim</th>
                  <th className='choice-no choice'>Não</th>
                  <th>Informações</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>Apresentam algum tique? </td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="apresenta_algum_tique"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quais momentos?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="quais_momentos"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Tem alguma sequância?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="alguma_sequencia"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Usou chupeta? Até quando?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="usou_chupeta"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Chupou dedos? Até quando?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="chupou_dedos_ate"            
                    className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Roeu ou roe unhas?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="roeu_roe_unhas"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quais momentos?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="quais_momentos"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Puxa a orelha?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="puxa_orelha"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Arranca o cabelo?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="arranca_cabelo"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Come os cabelos?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="come_os_cabelos"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Morde os lábios?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="morde_os_labios"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Come coisas estranhas? (Ex.: fezes, coisas do chão, pedaços de objetos etc.)</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="como_coisas_estranhas"            className="input-field "
                    />

                  </td>
                </tr>


                {/* ... Continue com as outras linhas */}
              </tbody>
            </table>
          </div>
        </section>

        {/* Seção 6.6: DESENVOLVIMENTO */}
        <section className="row section">
          <h5>6. Desenvolvimento - <span>6.6 SEXUALIDADE</span></h5>
          {/* Subseções para informações de desenvolvimento */}
          <div className="form-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Perguntas</th>
                  <th className='choice-yes '>Sim</th>
                  <th className='choice-no choice'>Não</th>
                  <th>Informações</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>A criança tem alguma curiosidade sexual? </td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="curiosidade_sexual"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Faz algum tipo de manipulação?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="algum_tipo_de_manipulacao"            className="input-field "
                    />

                  </td>
                </tr>


                {/* ... Continue com as outras linhas */}
              </tbody>
            </table>
          </div>
        </section>


        {/* 6.7- ESCOLARIDADE*/}
        <section className="row section-2">
        <h5>6. Desenvolvimento - <span>6.7 Escolaridade</span></h5>
          {/* Campos para informações de tratamento */}
          <div className=" col-md-12 input-container">
            <span>Qual o critério a família usou na escolha da escola?</span>
              <input 
              type="text" 
              name="escolha_criteria_escola" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Com que idade iniciou?</span>
              <input 
              type="number" 
              name="idade_iniciou" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-6 input-container">
            <span>Como foi a adaptação na escola?</span>
              <input 
              type="text" 
              name="adaptacao_escola" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-6 input-container">
            <span>Qual a atividade escolar que a criança mais gosta?</span>
              <input 
              type="text" 
              name="atividade_escolar_mais_gosta" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Qual o comportamento da criança diante das lições da escola?</span>
              <input 
              type="text" 
              name="comportamento_diante_licoes" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Qual a quantidade de lição de casa?</span>
              <input 
              type="number" 
              name="quantidade_liçao_casa" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Qual horário que ela faz as lições?</span>
              <input 
              type="time" 
              name="horario_faz_licoes" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Ela necessita de auxílio para fazer as lições?</span>
              <input 
              type="text" 
              name="necessita_auxilio_licoes" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Que dificuldades ela apresenta nas disciplinas escolares?</span>
              <input 
              type="text" 
              name="dificuldades_apresentadas_nas_disciplinas" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Com que idade foi alfabetizada?</span>
              <input 
              type="number" 
              name="idade_foi_alfabetizado" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Apresentou alguma dificuldade nessa época?</span>
              <input 
              type="text" 
              name="apresentou_alguma_dificuldade_nessa_epoca" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Foi reprovado alguma vez?</span>
              <input 
              type="text" 
              name="foi_reprovado_alguma_vez" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Mudou de escola? Por quê?</span>
              <input 
              type="text" 
              name="mudou_de_escola" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Quando começaram a aparecer dificuldades escolares?</span>
              <input 
              type="text" 
              name="quando_iniciou_dificuldades_escolares" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>A mãe relacionou o fato com alguma mudança no ambiente familiar? Qual?</span>
              <input 
              type="text" 
              name="mae_relacionou_fato_com_alguma_mudança" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Recebe ou já recebeu alguma ajuda extraescolar?</span>
              <input 
              type="text" 
              name="recebe_recebeu_ajuda_escolar" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>A criança faz atividade extraescolar? Qual?</span>
              <input 
              type="text" 
              name="crianca_faz_atividade_extraescolar" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Série que cursa?</span>
              <input 
              type="text" 
              name="serie_que_cursa" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

        </section>

      {/* 6.8- SOCIABILIDADE*/}
        <section className="row section-2">
        <h5>6. Desenvolvimento - <span>6.7 Sociabilidade</span></h5>
          {/* Campos para informações de tratamento */}
            <div className=" col-md-12 input-container">
            <span>A mãe / pai o deixa trazer crianças para brincar em casa?</span>
              <input 
              type="text" 
              name="mae_pai_deixar_trazer_criancas_para_brincar" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Deixa descer no prédio ou sair na rua para brincar?</span>
              <input 
              type="text" 
              name="deixa_sair_rua_brincar" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Tem companheiro (a), amigo (a)? De que idade?</span>
              <input 
              type="number" 
              name="tem_companheiro_amigo" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Prefere brincar sozinho ou com outras crianças?</span>
              <input 
              type="text" 
              name="prefere_brincar_sozinho_ou_com_outras_crianças" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Domina ou é dominado nas brincadeiras?</span>
              <input 
              type="text" 
              name="domina_dominado" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Adapta-se facilmente aos lugares que frequenta?</span>
              <input 
              type="text" 
              name="adapta_se_facilmente_ao_lugares" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Que tipo de brincadeira rejeita com outras crianças?</span>
              <input 
              type="text" 
              name="tipo_brincadeiras_rejeita_outras_criancas" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Brinca nas casas de outras pessoas?</span>
              <input 
              type="text" 
              name="brinca_na_casa_de_outras_pessoas" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Dorme fora de casa? Na casa de quem?</span>
              <input 
              type="text" 
              name="dorme_fora" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Os pais normalmente saem com a criança?</span>
              <input 
              type="text" 
              name="pais_normalmente_saem_com_a_crianca" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

        </section>

        {/* 6.9- REAÇÕES EMOCIONAIS*/}
        <section className="row section-2">
        <h5>6. Desenvolvimento - <span>6.9 Reações Emocionais</span></h5>
          {/* Campos para informações de tratamento */}
            <div className=" col-md-12 input-container">
            <span>Qual o temperamento da criança?</span>
              <input 
              type="text" 
              name="temperamento_da_crianca" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Chora com facilidade? De quê?</span>
              <input 
              type="text" 
              name="chora_com_facilidade" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Qual a atitude tomada?</span>
              <input 
              type="text" 
              name="atitude_tomada" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Tem ciúmes?</span>
              <input 
              type="text" 
              name="tem_ciumes" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>De quem?</span>
              <input 
              type="text" 
              name="ciumes_de_quem" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Atitude tomada?</span>
              <input 
              type="number" 
              name="atitude_tomada" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>           

        </section>

        {/* Seção 7: DOENÇAS */}
        <section className="row section">
          <h5>7. Doenças</h5>
          {/* Campos para informações de doenças */}
            <div className=" col-md-12 input-container">
            <span>Que tipo de doença já teve?</span>
              <input 
              type="text" 
              name="tipo_doenca_teve" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Tem febre constante? </span>
              <input 
              type="text" 
              name="febre_constante" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Convulsões com febre?</span>
              <input 
              type="text" 
              name="convulcoes_febre" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Convulsões sem febre?</span>
              <input 
              type="text" 
              name="convulcoes_sem_febre" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Frequência?</span>
              <input 
              type="text" 
              name="frequencia_convulcoes" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Tonturas?</span>
              <input 
              type="text" 
              name="toturas" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Ficou roxo alguma vez?</span>
              <input 
              type="text" 
              name="roxo_alguma_vez" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div> 

            <div className=" col-md-12 input-container">
            <span>Cirurgia? Quais?</span>
              <input 
              type="text" 
              name="cirurgias" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div> 

            <div className=" col-md-12 input-container">
            <span>Hospitalização? Quanto tempo? Motivo?</span>
              <input 
              type="number" 
              name="hospitalizacao" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div> 

            <div className=" col-md-12 input-container">
            <span>Anestesia? Idade?</span>
              <input 
              type="number" 
              name="anestesia" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div> 

            <div className=" col-md-12 input-container">
            <span>Problemas cardíacos?</span>
              <input 
              type="text" 
              name="problemas_cardiacos" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div> 

            <div className=" col-md-12 input-container">
            <span>Bronquite?</span>
              <input 
              type="text" 
              name="bronquite" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div> 

            <div className=" col-md-12 input-container">
            <span>Apresenta alguma dificuldade auditiva, visual?</span>
              <input 
              type="text" 
              name="dificuldade_auditiva_visual" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div> 

            <div className=" col-md-12 input-container">
            <span>Faz uso de alguma medicação? Qual?</span>
              <input 
              type="text" 
              name="uso_alguma_medicacao" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>    
        </section>

        <hr className='mt-4 mb-4'/>

        {/* Seção 8: HISTÓRICO FAMILIAR */}
        <section className="row section">
          <h5>8. Histórico Familiar</h5>
          {/* Campos para histórico familiar */}
          <div className=" col-md-12 input-container">
            <span>Como é a educação dos pais em relação a criança? (Se são permissivos, flexíveis, autoritários etc.)</span>
              <textarea 
              type="text" 
              name="" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>A criança é estimulada em casa? Como? (O que a família faz com a criança.)</span>
              <textarea 
              type="text" 
              name="" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Como é o fim de semana da família?</span>
              <textarea 
              type="text" 
              name="" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Como é a rotina diária da criança?</span>
              <textarea 
              type="text" 
              name="" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Quem são as pessoas mais próximas que convivem com a criança?</span>
              <textarea 
              type="text" 
              name="" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Quais são as brincadeiras preferidas da criança? (Ex.: cócegas, cantar, ouvir música, correr, etc.)</span>
              <textarea 
              type="text" 
              name="" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Quais são os brinquedos favoritos da criança? (Ex.: celular, vídeos de carro, desenho, bolha, brinquedos sonoros ou com luzes, etc.)</span>
              <textarea 
              type="text" 
              name="" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Quais são os alimentos preferidos da criança? (Ex.: frutas, guloseimas, bolachas, etc.)</span>
              <textarea 
              type="text" 
              name="" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>O que é mais importante para os pais que a criança aprenda?</span>
              <textarea 
              type="text" 
              name="" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>

            <div className=" col-md-12 input-container">
            <span>Quais comportamentos os pais querem reduzir?</span>
              <textarea 
              type="text" 
              name="" 
              className="input-field"
              />

              <label className="input-label"></label>

              <span className="input-highlight"></span>
            </div>
        </section>

        {/* Botão de envio */}
        <div className="col-md-12 form-group">
          <Inputs
            type="submit"
            value="Enviar"
          />
        </div>
      </form>
    </div>
  );
}

export default AnamneseForm;
