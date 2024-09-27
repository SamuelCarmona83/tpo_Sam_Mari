import React, { useState } from 'react';
import {Outlet, Link, useLocation} from 'react-router-dom';
import './style.css';
import logo from '../../imagenes/CatLogoSF.png';
import Navbar from './Navbar';
import Footer from '../LogOff/Footer';


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
                <nav className={estado === "/usuario" ? "logOfNavBar fondo":"logOfNavBar"}>
                    <div className="divNav row_spaceBetween">
                        <figure >
                            <Link to="/" onClick={() => actualizarNavbar("/")}>
                                <img className='logoNav' src={logo} alt='Logo de la pagina, es un gato'/>
                            </Link>
                        </figure>
                        <Navbar estado={estado} actualizarNavbar={actualizarNavbar}/>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet context={actualizarNavbar}/>
                <hr className="divider" />
                <Footer />
            </main>
        </div>
    );
    
}
export default Layout;