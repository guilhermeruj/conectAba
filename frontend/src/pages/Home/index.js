import SidebarMenu from '../../components/NovoSideBar';
import UserCard from '../../components/UserCard';

function HomePage() {
  return (
    <div className="container-layout">
      <div className="container-left">
        <SidebarMenu/>
      </div>
      <div className="container-right">
        <div className="header">
          <UserCard/>
        </div>

        
        
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default HomePage;