import { useContext } from 'react';
import { Context } from '../../context/UserContext';

function PrivateRoute() {
  const { authenticated } = useContext(Context);

  return authenticated ? 'Logado' : 'Deslogado';
}

export default PrivateRoute;
