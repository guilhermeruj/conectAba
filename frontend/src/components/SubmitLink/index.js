
import './submitModule.css';
import { Link } from 'react-router-dom';

const SubmitLink = ({ to, children }) => {
  return (
    <Link to={to} className="custom-button" type="submit">
      {children}
    </Link>
  );
};

export default SubmitLink;

