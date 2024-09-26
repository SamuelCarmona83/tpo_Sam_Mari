import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import logo from './../../imagenes/CatLogo.jpg'
import logo1 from './../../imagenes/facebook.png'
import logo2 from './../../imagenes/instagram.png'
import logo3 from './../../imagenes/twitter.png'

function Footer(){
    return ( 
        <footer className="footer">
         <div className="footer-1">
         <a className="footer-logo" >
            <img className="footer-logo-m" src={logo} alt="Logo" />
        </a>

            <ul className="footer-links">
                <li>Simplifica tus finanzas</li>
                <li>SamuelMari</li>
                <li>Comentarios</li>
                <li>Irformación</li>
                <li>Colaboraciones</li>
            </ul>
            <div className="footer-links-1">
                <a>
                <img className="footer-logo-r" src={logo1} alt="Logo" />
                </a>
                <a>
                <img className="footer-logo-r" src={logo2} alt="Logo" />
                </a>
                <a>
                <img className="footer-logo-r" src={logo3} alt="Logo" />
                </a>
                
            </div>
         </div>
         <div className="footer-2">
            <ul className="footer-items">
                <li>@SamuMari 2024</li>
                <li>Privacidad</li>
                <li>Video</li>
            </ul>
            <ul className="footer-items">
                <li>Iniciar sesión</li>
                <li>Registrate</li>
                <li>Inicio</li>
            </ul>
         </div>

            

        </footer>
     );
}

export default Footer;