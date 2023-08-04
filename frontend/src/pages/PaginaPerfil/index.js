import React from 'react'
import './userProfile.css';
import Perfil from '../../components/Perfil';
import SidebarMenu from '../../components/NovoSideBar';
import UserCard from '../../components/UserCard';

function UserProfile() {
  return (
    <div className="layout-page">

      <div className="container-left">
        <SidebarMenu/>
      </div>
      
      <div className="container-right">
        <div className="header">
          <UserCard/>
        </div>
   
        <div className="container-perfil">
            <Perfil/>
        </div>
        
        
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default UserProfile;