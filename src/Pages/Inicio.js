import React from 'react';
import Carrucel from '../Componentes/LogOff/Carrusel.js';
import FormularioRegistro from '../Componentes/IniciarSesion/FormularioRegistro.js';
import Nosotros from '../Componentes/LogOff/Nosotros.js';
import '../Componentes/LogOff/style.css';
import imagen from '../imagenes/fondo.jpg';
import Button from '@mui/material/Button';


function Inicio(){

    return (
       
        <div id='inicio'>
            <div className='headerP' style={{ backgroundImage: `url(${imagen})` }}>
                <div className='Slogan' >
                <h1 className="header-title">
                Gestiona tus gastos en equipo con <strong>FinSnap</strong>,<br />
                reduce la carga y maximiza la diversión.<br /></h1>
                <br></br>
                <h5 className="header-title6"> Con nuestra app, compartir los costos se convierte<br />
                 en una experiencia sencilla y agradable, permitiéndote disfrutar
                <br /> de cada momento sin preocupaciones.
                </h5>
                <Button className='boton-registrase' variant="contained"  color="black" 
                 style={{ margin: '30px',backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'darkgray' } }} >  Registrarse </Button>
                </div>
                <Carrucel></Carrucel> 
            </div>
            <Nosotros/>
            <div className='d-flex justify-content-center align-items-center'>
                
            
            </div>
            
            
        </div>
        
    );


}

export default Inicio;