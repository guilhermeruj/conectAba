import './headerModules.css';
import UserCard from '../UserCard';

function Header() {
  return (
    <div className="header">
      <div className="user-profile">
        <UserCard />
      </div>
    </div>
      

  );
}

export default Header;
