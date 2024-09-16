import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
    let Contenido;

    const [estado, setEstado] = useState("/");

    const actualizarNavbar = (path) => {
        console.log(path);
        setEstado(path);
    }

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
        case "/iniciar-sesion":
            Contenido = (
                <ul>
                    <ButtonRegistrar />
                    <ButtonInicio />
                </ul>
            );
            break;
        case "/":
            Contenido = (
                <ul>
                    <ButtonRegistrar />
                    <ButtonIniciar />
                </ul>
            );
            break;
        default:
            Contenido = (
                <ul>
                    <ButtonIniciar />
                    <ButtonInicio />
                </ul>
            );
    }

    return Contenido;
}

export default Navbar;