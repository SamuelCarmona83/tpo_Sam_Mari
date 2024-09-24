import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';



function UsuarioNB ({actualizar}) {
    const navigate = useNavigate();

    const cerrarSesion = () => {
        actualizar('/');
        navigate('/');
    }

    return (
        <ul>
            
            <li className='liNavBar'>
                <Button style={{ color: 'black' }} variant='outlined'>Mi Perfil</Button>
            </li> 
            <li className='liNavBar'>
                <Button style={{ color: 'black' }} variant='outlined' >Proyectos</Button>
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