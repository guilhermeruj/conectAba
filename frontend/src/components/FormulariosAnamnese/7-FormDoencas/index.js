import React, { useState} from 'react';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';


function FormDoencas() {

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

export default FormDoencas;