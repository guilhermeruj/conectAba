import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register";

import Header from "./components/Header";
import Footer from "./components/Footer"

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Register/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;