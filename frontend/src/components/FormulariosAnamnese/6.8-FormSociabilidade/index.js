import React, { useState } from 'react';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';


function FormDevSociabilidade() {

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
            
          {/* 6.8- SOCIABILIDADE*/}
          <section className="row section-2">
          <h5>6. Desenvolvimento - <span>6.8 Sociabilidade</span></h5>
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

export default FormDevSociabilidade;