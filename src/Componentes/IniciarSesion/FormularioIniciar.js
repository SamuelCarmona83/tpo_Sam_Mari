import React, { useState, useEffect } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField } from '@mui/material';
import { useNavigate ,useOutletContext} from 'react-router-dom';
import { validarLogin } from '../../Api/apiUsuarios';
import { Link } from 'react-router-dom';

function FormularioIniciarSesion() {
    const navigate = useNavigate();
    const actualizarNavbar = useOutletContext();
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState(""); 
    const [error, setError] = useState("");

    const  validarUsuario = async (correo, contraseña) => {
        let respuesta;
        //peticion a la api//
        try {
            respuesta = await validarLogin(correo, contraseña);
        } catch (error) {
            console.log("Error fetching data:", error);
        }

        if (respuesta.mensaje && respuesta.mensaje === "Inicio de sesión exitoso") {
            actualizarNavbar("/usuario");
            navigate("/"+ sessionStorage.getItem('usuarioNombre'));
        } else {
            if(respuesta.mensaje && respuesta.mensaje !== 'Inicio de sesión exitoso'){
                alert(respuesta.mensaje);
            }else{
                alert("Verifique sus datos e intente de nuevo");
            }
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
            <h3>Iniciar sesión</h3>
            <div className='item_Registro'>
                <TextField
                    required
                    id="outlined-required"
                    label="Correo Electrónico"
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

            <div className='mt-4 text-center'>
                <Link to="/recuperar-contraseña" className="link-recuperar">¿Olvidaste tu contraseña?</Link>
            </div>
            <div className="text-center">
                <Button variant="contained" onClick={mensaje}>
                    Iniciar sesión
                </Button>
            </div>
        </article>
    );
}

export default FormularioIniciarSesion;
