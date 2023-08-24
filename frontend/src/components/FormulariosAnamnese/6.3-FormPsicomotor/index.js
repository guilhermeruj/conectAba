import React, { useState} from 'react';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';


function FormDevPsicomotor() {


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
            
          {/* Seção 6.3: DESENVOLVIMENTO */}
          <section className="row section">
            <h5>6. Desenvolvimento - <span>6.3 Desenvolvimento Psicomotor</span></h5>
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
                    <td>Com que idade sorriu?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="idade_sorriu"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Com que idade fixou a cabeça?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="idade_fixou_a_cabeca"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Com que idade se sentou?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="idade_se_sentou"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Com que idade engatinhou?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="idade_engatinhou"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Com que idade ficou de pé?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="idade_ficou_de_pé"            
                      className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Com que idade andou?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="idade_andou"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Com que idade falou as primeiras palavras?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="idade_falou_primeiras_palavras"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Com que idade falou corretamente?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="idade_falou_corretamente"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Como era estimulado?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="era_estimulado"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Trocou letras?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="trocou_letras"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Gagueja ou gaguejou?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="gagueja_gaguejou"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Controle dos esfíncteres?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="controle_dos_esfincteres"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>É muito agitado?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="muito_agitado"            className="input-field "
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
                      name="quais_momnetos"         
                      className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>A criança costuma cair muito?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="crianca_costuma_cair_muito"            className="input-field "
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

export default FormDevPsicomotor;