import React, { useState} from 'react';
import '../../FormulariosAnamnese/AnamneseForm.css';
import Inputs from '../../Inputs';


function FormDevSexualidade() {

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
            
          {/* Seção 6.6: DESENVOLVIMENTO */}
          <section className="row section">
            <h5>6. Desenvolvimento - <span>6.6 Sexualidade</span></h5>
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
                    <td>A criança tem alguma curiosidade sexual? </td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" 
                      name="curiosidade_sexual"               
                      className="input-field "
                      />

                    </td>
                  </tr>

                  <tr>
                    <td>Faz algum tipo de manipulação?</td>
                    <td><input type="radio" name="planejada" value="Sim" /></td>
                    <td><input type="radio" name="planejada" value="Não" /></td>
                    <td>
                      <input 
                      type="text" name="algum_tipo_de_manipulacao"            
                      className="input-field "
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

export default FormDevSexualidade;