import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';
import InputMask from 'react-input-mask';


function FormIdentPai() {

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
                <h5>1.1 Identificação do Pai</h5>
                {/* Dados do Pai */}

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

export default FormIdentPai;