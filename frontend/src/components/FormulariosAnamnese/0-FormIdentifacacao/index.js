import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';
import InputMask from 'react-input-mask';


function FormIdentificacao() {


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

export default FormIdentificacao;