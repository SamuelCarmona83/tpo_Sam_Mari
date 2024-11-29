import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';


function UsuarioNB ({actualizar, estado}) {
    const navigate = useNavigate();

    const cerrarSesion = () => {
        actualizar('/');
        navigate('/');
    }

    const toPerfil = () => {
        navigate(`/Perfil`);
    }

    const toProyectos = () => {
        let nombreUsuario = sessionStorage.getItem("usuarioID");
        navigate(`/${nombreUsuario}`);
    }

    return (
        <ul>
            <li className='liNavBar'>
                <Button style={{ color: 'black' }} variant='outlined' onClick={toPerfil}>Mi Perfil</Button>
            </li> 
            <li className='liNavBar'>
                <Button style={{ color: 'black' }} variant='outlined' onClick={toProyectos}>Proyectos</Button>
            </li> 
            <li>
                <Button style={{ color: 'black' }} variant='outlined' onClick={cerrarSesion}>Cerrar Sesión</Button>
            </li>
            <li>
                <PersonIcon style={{ color: 'black' }} />
            </li>
        </ul>
    );
}

export default UsuarioNB;