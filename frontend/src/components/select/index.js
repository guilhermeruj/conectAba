// Componente select para opçoes 
import './selectModule.css';

const Select = ({ label, options, onChange, name }) => {
  return (
    <div className="select-container">
      <label>{label}:</label>
      <select className="select-input"  name={name} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} name={option.name}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
