import SidebarMenu from '../../components/NovoSideBar';
import Header from '../../components/Header';

function HomePage() {
  return (
    <div className="layout-page">
      <div className="container-left">
        <SidebarMenu/>
      </div>
      <div className="container-right">
        <div className="container-header">
          <Header/>
        </div>

        
        
      </div>
    </div>
  )
}

export default HomePage;