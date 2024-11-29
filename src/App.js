import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Componentes/Layout/Layout.js';
import Inicio from './Pages/Inicio.js';
import IniciarSesion from './Pages/Acceso.js';
import Usuario from './Pages/Usuario.js';
import Perfil from './Pages/PerfilUsuario.js';
import RecuperarContraseña from './Pages/RecuperarContraseña.js';
import CambiarClave from './Pages/CambiarClave.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" index element={<Inicio />} />
          <Route path="iniciar-sesion" element={<IniciarSesion pag="iniciar"/>} />
          <Route path="registrate" element={<IniciarSesion pag="registrate"/>} />
          <Route path=":usuario" element={<Usuario />} />
          <Route path="Perfil" element={<Perfil />}/>
          <Route path="recuperar-contraseña" element={<RecuperarContraseña />} />
          <Route path="cambiarClave/:id"  element={<CambiarClave />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;