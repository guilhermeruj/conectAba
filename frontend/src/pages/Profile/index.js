import React, { useContext, useState } from 'react';
import Inputs from '../../components/input';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profileModule.css'

import { Context } from '../../context/UserContext';


function Profile() {
  

  return (
    <div className='container-profile'>
      <div className='card-profile style-cards'>
      <h1 className='col-12 text-center'>Dados do Usuario</h1>
      </div>
    </div>
  );
}

export default Profile;
