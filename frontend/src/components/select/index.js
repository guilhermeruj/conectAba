
import './style.css';

const Select = ({ label, options, value, onChange }) => {
  return (
    <div className="select-container">
      <label>{label}:</label>
      <select className="select-input" value={value} onChange={onChange}>
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
