import React, { useState} from 'react';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';


function FormDevReacoesEmocionais() {


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

              <div className=" col-md-5 input-container">
              <span>Chora com facilidade? De quê?</span>
                <input 
                type="text" 
                name="chora_com_facilidade" 
                className="input-field"
                />

                <label className="input-label"></label>

                <span className="input-highlight"></span>
              </div>

              <div className=" col-md-5 input-container">
              <span>Qual a atitude tomada?</span>
                <input 
                type="text" 
                name="atitude_tomada" 
                className="input-field"
                />

                <label className="input-label"></label>

                <span className="input-highlight"></span>
              </div>

              <div className=" col-md-5 input-container">
              <span>Tem ciúmes?</span>
                <input 
                type="text" 
                name="tem_ciumes" 
                className="input-field"
                />

                <label className="input-label"></label>

                <span className="input-highlight"></span>
              </div>

              <div className=" col-md-5 input-container">
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

export default FormDevReacoesEmocionais;