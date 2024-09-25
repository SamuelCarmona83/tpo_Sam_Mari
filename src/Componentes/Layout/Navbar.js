import React from 'react';
import {Link} from 'react-router-dom';
import UsuarioNB from './UsuarioNB';

function Navbar ({estado, actualizarNavbar}) {
    let Contenido;

    const ButtonIniciar = () => {
        return (
            <li>
                <Link to="/iniciar-sesion">
                <button className='buttonNav' onClick={() => actualizarNavbar("/iniciar-sesion")}>
                    Iniciar sesión
                </button>
                </Link>
            </li>
        )
    }

    const ButtonRegistrar = () => {
        return (
            <li>
                <Link to="/registrate">
                <button className='buttonNav' onClick={() => actualizarNavbar("/registrate")}>Registrate</button>
                </Link>
            </li>
        )
    }

    const ButtonInicio = () => {
        return (
            <li>
                <Link to="/">
                <button className='buttonNav' onClick={() => actualizarNavbar("/")}>Inicio</button>
                </Link>
            </li>
        )
    }

    switch (estado){
        case "/":
            Contenido = (
                <ul>
                    <ButtonRegistrar />
                    <ButtonIniciar />
                </ul>
            );
            break;
        case "/iniciar-sesion":
            Contenido = (
                <ul>
                    <ButtonRegistrar />
                    <ButtonInicio />
                </ul>
            );
            break;
        case "/registrate":
            Contenido = (
                <ul>
                    <ButtonIniciar />
                    <ButtonInicio />
                </ul>
            );
            break;
        default:
            Contenido = (
                <UsuarioNB actualizar={actualizarNavbar}></UsuarioNB>
            );
    }

    return Contenido;
}

export default Navbar;