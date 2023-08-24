import React, { useState } from 'react';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';


function FormDevAlimentacao() {

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
            
          <section className="row section">
          <h5>6. Desenvolvimento - <span>6.2 Alimentação</span></h5>
          {/* Subseções para informações de desenvolvimento */}
          <div className="form-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Perguntas</th>
                  <th className='choice-yes '>Sim</th>
                  <th className='choice-no choice'>Não</th>
                  <th>Informações</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>Mamou leite materno?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="mamou_leite_materno"               className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Sucção?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" name="succao"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Engolia bem?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="engolia_bem"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Vomitava com frequência?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="vomitava_com_frequencia"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quanto tempo foi amamentado com leite materno?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="quanto_tempo_foi_amamentado_com_leite_materno"            
                    className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Mamadeira?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="mamadeira"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quanto tempo tomou mamadeira?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="quanto_tempo_tomou_mamadeira"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Come comida de sal? </td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="como_comida_de_sal"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quando introduziu?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="quando_introduziu"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Houve orientação médica?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="houve_orientacao_medica"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Houve rejeição alimentar?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="houver_rejeicao_alimentar"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Era preciso forçar para comer?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="era_preciso_forcar_para_comer"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Costumava vomitar?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="costumava_vomitar"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Diarreia?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="diarreia"         
                    className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Prisão de ventre?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="prisao_de_ventre"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Recebeu ou recebe ajuda para alimentação?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="recebeu_recebe_ajuda_para_alimentacao"  
                    className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Tem alguma restrição alimentar?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="alguma_restricao_alimentar"            className="input-field "
                    />

                  </td>
                </tr>

                <tr>
                  <td>Quais?</td>
                  <td><input type="radio" name="planejada" value="Sim" /></td>
                  <td><input type="radio" name="planejada" value="Não" /></td>
                  <td>
                    <input 
                    type="text" 
                    name="quais"            className="input-field "
                    />

                  </td>
                </tr>

                {/* ... Continue com as outras linhas */}
              </tbody>
            </table>
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

export default FormDevAlimentacao;