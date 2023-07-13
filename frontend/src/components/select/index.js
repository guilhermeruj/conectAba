import React from 'react';
import './selectModule.css';

const Select = ({ label, options, onChange, name, value }) => {
  return (
    <div className="select-container">
      <label>{label}:</label>
      <select className="select-input" name={name} onChange={onChange} value={value}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
