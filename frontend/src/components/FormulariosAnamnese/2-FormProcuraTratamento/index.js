import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';


function FormTratamento() {


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

export default FormTratamento;