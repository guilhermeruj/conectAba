import './style.css';

const Inputs = ({ label, type, name, placeholder, handleOnChage , value, multiple }) => {
  return (
    <div className="input-container">
      <label htmlFor='{name}'>{label}:</label>
      <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChage } value={value} {...(multiple ? {multiple}: '')}/>
    </div>
  );
};

export default Inputs;
