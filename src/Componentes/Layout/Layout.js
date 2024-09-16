import React from 'react';
import { useLocation, Link, Outlet} from 'react-router-dom';
import '../LogOff/style.css';
import logo from '../../imagenes/CatLogoSF.png';
import Navbar from './Navbar';


function Layout (){

    return (
        <div>
            <header>
                <nav className="logOfNavBar">
                    <div className="divNav row_spaceBetween">
                        <figure >
                                <img className='logoNav' src={logo} alt='Logo de la pagina, es un gato'/>
                        </figure>
                        <Navbar />
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
    
}
export default Layout;