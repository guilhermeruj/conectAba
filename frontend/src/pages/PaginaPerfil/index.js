import React from 'react'
import './userProfile.css';
import Perfil from '../../components/Perfil';
import SidebarMenu from '../../components/NovoSideBar';
import Header from '../../components/Header';

function UserProfile() {
  return (
    <div className="layout-page">

      <div className="container-left">
        <SidebarMenu/>
      </div>
      
      <div className="container-right">
        <div className="container-header">
          <Header/>
        </div>
   
        <div className="container-perfil">
            <Perfil/>
        </div>
        
        
      </div>
    </div>
  )
}

export default UserProfile;