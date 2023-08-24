import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';
import InputMask from 'react-input-mask';


function FormDevSono() {

    const [addressData, setAddressData] = useState({});
  const [cep, setCep] = useState('');

  useEffect(() => {
    if (cep.length === 10) { // Verifica se o CEP está completo (formato: 99.999-999)
      fetchAddressData();
    }
  }, [cep]);

  const fetchAddressData = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`);
      setAddressData(response.data);
    } catch (error) {
      console.error(error);
    }
  };


    const [formData, setFormData] = useState({});

    const [selectedSex, setSelectedSex] = useState(''); // Estado para armazenar o sexo selecionado

    const handleSexChange = (event) => {
      setSelectedSex(event.target.value);
    };

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
          {/* Seção 6: DESENVOLVIMENTO */}
          <section className="row section">
            <h5>6. Desenvolvimento - <span>6.1 Sono</span></h5>
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
                    <td>Dorme bem?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="dorme_bem"               className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Pula quando dorme?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="pula_quando_dorme"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Baba a noite?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="baba_a_noite"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Fala dormindo?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="fala_dormindo"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Grita durante o sono?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="grita_durante_sono"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Range os dentes?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="range_dentes"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Sonâmbulo?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="sonambulo"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Acorda muito a noite?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="acorda_muito_a_noite"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Acorda quando sonha?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="acorda_quando_sonha"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Tem pesadelo?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="tem_pesadelo"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Levanta as pernas?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="levanta_as_pernas"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Acorda nos pés da cama?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="acorda_nos_pes_da_cama"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Joga as cobertas fora da cama?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="joga_as_cobertas_fora_cama"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Dorme em quarto separado dos pais?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="dorme_em_quarto_separado_dos_pais"         className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Desde que idade?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="desde_que_idade"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>A cama é individual?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="cama_individual"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Dorme com alguém no quarto? Quem?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="dorme_com_alguem_no_quarto"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Acorda e vai para a cama dos pais?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="acorda_e_vai_para_cama_dos_pais"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Atitude dos pais?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="atitude_dos_pais"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Precisa de luz para dormir?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="precisa_de_luz_para_dormir"            className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Tem enurese?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="tem_enurese"            className="input-field "
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

export default FormDevSono;