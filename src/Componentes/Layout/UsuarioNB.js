import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logoConf from '../../imagenes/rueda-dentada.svg';


function UsuarioNB () {

    return (
        <ul>
            <li className='liNavBar'>
                Usuario
            </li> 
            <li>
                <button className='buttonNav'>
                    <img src={logoConf} alt='boton de configuracion'/>
                </button>
            </li>
        </ul>
    );
}

export default UsuarioNB;