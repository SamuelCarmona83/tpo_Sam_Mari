import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField } from '@mui/material';
import { useOutletContext } from 'react-router-dom';

function FormularioIniciarSesion() {
    const actualizarNavbar = useOutletContext();
    const [correo, setCorreo] = React.useState("");
    const [contraseña, setContraseña] = React.useState(""); 
    const [error, setError] = React.useState("");
    

    const usuarios = [{
        email: "mariangel@gmail.com",
        contraseña: "ABCDE"},
        {email:"samuel@gmail.com",
        contraseña: "AEIOU"
        }
    ];

    const validarUsuario = (correo, contraseña) => {
        const existe = usuarios.some(usu => usu.email === correo && usu.contraseña === contraseña);
        
        if (existe) {
            actualizarNavbar("/usuario");
        } else {
            alert("Verifique sus datos e intente de nuevo");
        }
    };

    const validarCorreo = (correo) => {
        const vali = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return vali.test(correo);
    };

    const mensaje = (event) => {
        event.preventDefault();
        if (validarCorreo(correo)) {
            setError("");
            validarUsuario(correo, contraseña); 
        } else {
            setError('Por favor, ingresa un correo electrónico válido.');
        }
    };

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
                    value={correo}
                    onChange={(e) => {
                        setCorreo(e.target.value);
                        setError("");
                    }}
                    error={!!error}
                    helperText={error}
                />
            </div>
            <div className='item_Registro'>
                <TextField
                    id="outlined-password-input"
                    label="Contraseña"
                    type="password"
                    autoComplete="current-password"
                    value={contraseña} 
                    onChange={(e) => setContraseña(e.target.value)} 
                />
            </div>
            
            <div className='mt-4'>
                <Button variant="contained" onClick={actualizarNavbar("/usuario")}>
                    Iniciar sesión
                </Button>
            </div>
        </article>
    );
}

export default FormularioIniciarSesion;
