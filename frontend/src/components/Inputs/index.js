import React from 'react';
import InputMask from 'react-input-mask';
import './inputsModules.css';

const Inputs = ({ type, label, name, value, handleOnChange, placeholder, required, icon, multiple, mask }) => {
  return (
    <div className="inputs-sections">
      <label htmlFor={name} className="titulo-label">
        {label}
      </label>
      <div className="inputs-style">
        {icon && <span className="input-icon">{icon}</span>}
        {mask ? (
          <InputMask
            mask={mask}
            id={name}
            name={name}
            value={value}
            onChange={handleOnChange}
            placeholder={placeholder}
            required={required}
            className="input-style"
            {...(multiple ? { multiple } : '')}
          />
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={handleOnChange}
            placeholder={placeholder}
            required={required}
            className="input-style"
            {...(multiple ? { multiple } : '')}
          />
        )}
      </div>
    </div>
  );
};

export default Inputs;
