import React from 'react';
import Carrucel from '../Componentes/LogOff/Carrusel.js';
import FormularioRegistro from '../Componentes/IniciarSesion/FormularioRegistro.js';
import Nosotros from '../Componentes/LogOff/Nosotros.js';
import '../Componentes/LogOff/style.css';
import VideoComponent from '../Componentes/LogOff/Video.js';



function Inicio(){

    return (
       
        <div id='inicio'>
            <Carrucel />
            <div className='row_spaceBetween'>
                <Nosotros/>
                <FormularioRegistro />
            </div>
            <VideoComponent></VideoComponent>
            
        </div>
        
    );


}

export default Inicio;