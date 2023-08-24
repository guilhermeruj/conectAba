import React, { useState } from 'react';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';


function FormHistoricoFamiliar() {


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
    );
}

export default FormHistoricoFamiliar;