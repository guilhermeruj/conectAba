import React, { useState } from 'react';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';


function FormGestacao() {


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
          {/* Seção 4: GESTAÇÃO */}
          <section className="row section-4">
            <h5>4. Gestação</h5>
            {/* Campos para informações de concepção */}
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
                    <td>Teve dificuldade para engravidar?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="dificuldade_engravidar"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Quanto tempo após o casamento?</td>
                    <td><input type="radio" name="ordem" value="Sim" /></td>
                    <td><input type="radio" name="ordem" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="tempo_apos_casamento"
                      className="input-field" 
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Teve enjoo? Quando?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="enjoo_quando" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Quanto sentiu a criança mexer?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="quando_mexeu" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Fez pré-natal?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="pre_natal" 
                      className="input-field" 

                      />
                      </td>
                  </tr>
                  
                  <tr>
                    <td>Transfusão de sangue?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="transfusao_sangue" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Tombos?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="tombos" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Doenças? Quais?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="doencas" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Hemorragias?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="hemorragias" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Convulsões?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="convulsoes" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Tomou alguma medicação? Qual?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="medicacao" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Fumou durante a gravidez?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="fumou_gravida" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Fazia uso de bebidas alcoólicas?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="uso_alcool" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Com que frequência?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="frequencia_alcool" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Usou algum tipo de droga? Quais?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="consumiu_droga" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Com que frequência?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="frequancia_droga" 
                      className="input-field" 

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

export default FormGestacao;