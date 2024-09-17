import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField } from '@mui/material';
import { Link, useOutletContext } from 'react-router-dom';

function FormularioIniciarSesion () {
    const actualizarNavbar = useOutletContext();

    return (
        <article className='w-50 registro'>
            <h3>
                Iniciar sesión
            </h3>
            <div className='item_Registro'>
                <TextField
                    required
                    id="outlined-required"
                    label="Correo Electrónico"
                    defaultValue=""
                />
            </div>
            <div className='item_Registro'>
                <TextField
                id="outlined-password-input"
                label="Contraseña"
                type="password"
                autoComplete="current-password"
                />
            </div>
            
            <div className='mt-4'>
                <Link to="/usuario">
                    <Button variant="contained" onClick={() => actualizarNavbar("/usuario")}>
                        Iniciar sesión
                    </Button>
                </Link>
            </div>
        </article>
    );

}

export default FormularioIniciarSesion;