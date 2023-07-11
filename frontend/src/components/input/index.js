import React from 'react';
import './style.css';

const Inputs = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="input-container">
      <label>{label}:</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default Inputs;
