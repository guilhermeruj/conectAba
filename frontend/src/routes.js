import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro";

import Header from "./components/Header";


function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Cadastro' element={<Cadastro/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;