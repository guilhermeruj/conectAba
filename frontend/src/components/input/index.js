// Componente Input para para formularios, que aceita diversos tipos 
import './inputModule.css';

const Inputs = ({ label, type, name, placeholder, handleOnChange, value, multiple }) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} {...(multiple ? { multiple } : '')} />
    </div>
  );
};

export default Inputs;
