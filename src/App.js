import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Componentes/Layout/Layout.js';
import Inicio from './Pages/Inicio.js';
import IniciarSesion from './Pages/Acceso.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route path="/" index element={<Inicio />} />
          <Route path="iniciar-sesion" element={<IniciarSesion pag="iniciar"/>} />
          <Route path="registrate" element={<IniciarSesion pag="registrate"/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;