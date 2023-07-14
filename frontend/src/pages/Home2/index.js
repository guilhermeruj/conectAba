
function Home2() {
  return (
    <div className="side-menu">
        <div className="brand-name">
            <h1>Brand</h1>
        </div>
        <ul>
            <li>Dashboard</li>
            <li>Paciente</li>
            <li>Doutores</li>
            <li>Clinica</li>
            <li>Mensagens</li>
            <li>Configurações</li>
            <li>Sair</li>
        </ul>
        <div className="container-side-menu">
            <div className="header">
                <div className="nav">
                    <div className="search">
                        <input type="text" placeholder="Pesquisar.."/>
                        <button type="submit"></button>
                    </div>
                    <div className="user">
                        <a href="#"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home2;