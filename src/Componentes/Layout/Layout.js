import React, { useState } from 'react';
import { useLocation, Link, Outlet} from 'react-router-dom';
import '../LogOff/style.css';
import logo from '../../imagenes/CatLogoSF.png';
import Navbar from './Navbar';


function Layout (){
    const [estadoLog, setEstadoLog] = useState(false);

    const cambiarFondo = () => {
        setEstadoLog(!estadoLog);
    }

    return (
        <div>
            <header >
                <nav className='logOfNavBar'>
                    <div className={estadoLog ? 'f0' : 'f1'} >
                        <div className="divNav row_spaceBetween">
                            <figure >
                                    <img className='logoNav' src={logo} alt='Logo de la pagina, es un gato'/>
                            </figure>
                            <Navbar />
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet cambiarFondo={cambiarFondo}/>
            </main>
        </div>
    );
    
}
export default Layout;