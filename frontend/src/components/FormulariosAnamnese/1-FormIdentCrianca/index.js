import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';
import InputMask from 'react-input-mask';


function FormIdentCrianca() {

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


    return(
        <form onSubmit={handleSubmit} className="row anamnese-form">
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

            </section>
            
            {/* Botão de envio */}
            <div className="col-md-12 form-group">
              <Inputs
                  type="submit"
                  value="Enviar"
              />
            </div>
        </form>
    );
}

export default FormIdentCrianca;