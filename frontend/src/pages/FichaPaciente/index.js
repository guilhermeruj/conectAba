import React from 'react';
// Style
import './Ficha.css';
// install biblioteca chart.js 
// npm install chart.js react-chartjs-2

// componentes
import PacienteProfile from '../../components/PacienteProfile';
import SidebarMenu from '../../components/NovoSideBar';
import UserCard from '../../components/UserCard';


function FichaPaciente() {

  return (
    <div className="container-layout">

        <div className="container-left">
            <SidebarMenu/>
        </div>

        <div className="container-right ">
            <div className="header">
            <UserCard/>
            </div>
            
            <div className='sessao-paciente-profile'>
              <PacienteProfile/>
            </div>   

        </div>
        
        <div className="footer">
        </div>
    </div>
  );
}

export default FichaPaciente;
