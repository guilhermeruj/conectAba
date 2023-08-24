import React, { useState, useEffect } from 'react';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';


function FormCasal() {

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
                <h5>1.3 Informações dos Pais</h5>
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

export default FormCasal;