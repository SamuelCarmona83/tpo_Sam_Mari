import React, { useState } from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import '../LogOff/style.css';
import logo from '../../imagenes/CatLogoSF.png';
import Navbar from './Navbar';


function Layout (){
    let location = useLocation();
    let actual = location.pathname;


    const [estado, setEstado] = useState(actual);

    const actualizarNavbar = (path) => {
        setEstado(path);
    }
    
    return (
        <div>
            <header >
                <nav className={estado == "/usuario" ? "logOfNavBar fondo":"logOfNavBar"}>
                    {console.log(estado)}
                    <div className="divNav row_spaceBetween">
                        <figure >
                                <img className='logoNav' src={logo} alt='Logo de la pagina, es un gato'/>
                        </figure>
                        <Navbar estado={estado} actualizarNavbar={actualizarNavbar}/>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet context={actualizarNavbar}/>
            </main>
        </div>
    );
    
}
export default Layout;