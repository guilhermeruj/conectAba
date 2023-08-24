import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';


function FormDevEscolar() {

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

              <div className=" col-md-3 input-container">
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

export default FormDevEscolar;