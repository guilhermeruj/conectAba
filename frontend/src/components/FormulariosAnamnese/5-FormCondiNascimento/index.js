import React, { useState } from 'react';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';


function FormConditionsNascimento() {

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
          {/* Seção 5: CONDIÇÕES DE NASCIMENTO */}
          <section className="row section-5">
            <h5>5. Condições de Nascimento</h5>
            {/* Campos para informações de condições de nascimento */}
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
                    <td>Foi na maternidade?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="foi_maternidade"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Foi em casa?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="foi_em_casa"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Quem atendeu?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="quem_atendeu"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Foi parto normal?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="parto_normal"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Fórceps?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="forceps"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Cesariana?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="cesariana"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Prematuro? Qual o peso?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="prematuro_peso"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Chorou logo?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="chorou_logo"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Cor ao nascer: </td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="cor_nasceu"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Teve complicações após o nascimento?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="complicacoes_nascimento"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Fez uso de oxigênio?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="usou_oxigen"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Incubadora?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="incubadora"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Icterícia?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="ictericia?"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Alguém ajudou a cuidar da criança após o nascimento?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="alguem_ajudou_cuidados"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td> Quem?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="quem_ajudou"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Quanto tempo?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="quanto_tempo"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Houve participação do pai na hora do parto?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="participacao_pai_parto"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Alguém da família acompanhou a hora do nascimento? </td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="familiar_acompanhou_parto"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Os avós marcaram presença?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="avos_presentes"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Os pais tiveram alguma perca significativa durante a gravidez?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="pais_perca_durante_gravidez"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Os pais trabalhavam fora?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="pais_trabalhavam_fora"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Quem foi a primeira pessoa, a saber, da gravidez?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="primeira_pessoa_saber_gravidez"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Quem escolheu o nome?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="quem_escolheu_nome"            className="input-field "
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

export default FormConditionsNascimento;