import React, { useState} from 'react';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';


function FormDevTiques() {

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
          {/* Seção 6.5: DESENVOLVIMENTO */}
          <section className="row section">
            <h5>6. Desenvolvimento - <span>6.5 Tiques</span></h5>
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
                    <td>Apresentam algum tique? </td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="apresenta_algum_tique"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Quais momentos?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="quais_momentos"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Tem alguma sequância?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="alguma_sequencia"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Usou chupeta? Até quando?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="usou_chupeta"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Chupou dedos? Até quando?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="chupou_dedos_ate"            
                      className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Roeu ou roe unhas?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="roeu_roe_unhas"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Quais momentos?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="quais_momentos"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Puxa a orelha?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="puxa_orelha"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Arranca o cabelo?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="arranca_cabelo"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Come os cabelos?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="come_os_cabelos"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Morde os lábios?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="morde_os_labios"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Come coisas estranhas? (Ex.: fezes, coisas do chão, pedaços de objetos etc.)</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="como_coisas_estranhas"            className="input-field "
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

export default FormDevTiques;