import React, { useState } from 'react';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';


function FormConcepcao() {
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
          {/* Seção 3: CONCEPÇÃO */}
          <section className="row section-3">
            <h5>3. Concepção</h5>
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
                    <td>A Criança foi planejada e desejada?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input type="text" name="info_planejada"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Ordem de nascimento em relação à criança</td>
                    <td><input type="radio" name="ordem" value="Sim" /></td>
                    <td><input type="radio" name="ordem" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="info_ordem"
                      className="input-field" 
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Abortos?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="info_abortos" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Naturais ou provocados? Por quê?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="natural_provocados" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Filhos natimortos: </td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="natimortos" 
                      className="input-field" 

                      />
                      </td>
                  </tr>
                  
                  <tr>
                    <td>Filhos vivos (Quantos)?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="filhos_vivos" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Mortes? Causa das mortes?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="mortes_causas" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>MA criança é adotada?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="adotada" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Com que idade veio para sua família?</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="idade_vinda" 
                      className="input-field" 

                      />
                      </td>
                  </tr>

                  <tr>
                    <td>Procedimento da adoção</td>
                    <td><input type="radio" name="abortos" value="Sim" /></td>
                    <td><input type="radio" name="abortos" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="procedimento_adocao" 
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

export default FormConcepcao;