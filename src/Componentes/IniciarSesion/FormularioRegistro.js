import React, { useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import {registrarUsuario} from '../../Api/apiUsuarios';
import {useNavigate} from 'react-router-dom';

function FormularioRegistro() {
    const location = useLocation();
    const path = location.pathname;
    const navigate = useNavigate();

    const [correo, setCorreo] = useState('');
    const [nombre, setNombre] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [repetirContraseña, setRepetirContraseña] = useState('');

    const validarCorreo = (correo) => {
        const vali = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return vali.test(correo);
    };

    const validarContraseñas = () => {
        if (!contraseña || !repetirContraseña) {
            alert('Las contraseñas no pueden estar vacías');
            return false;
        }
        if (contraseña !== repetirContraseña) {
            alert('Las contraseñas no coinciden');
            return false;
        }
        return true;
    };

    const manejarRegistro = async (event) => {
        event.preventDefault();

        if(validarCorreo(correo)){
            if(!nombre){
                alert("El nombre no puede estar vacio");
            }else{
                if(validarContraseñas()){
                    const respuestaApi = await registrarUsuario(correo, contraseña, nombre);
                    const dataJson = await respuestaApi.json();
                    //if(respuestaApi.status === 401 && dataJson.mensaje === "No Valido"){
                        //navigate('/');
                    //}
    
                    if(respuestaApi.status === 200){
                        alert("Se ha registrado correctamente");
                        navigate('/iniciar-sesion');
                    }else {
                        alert(dataJson.mensaje);
                    }
                }
            }
        }else{
            alert("El correo no es valido");
        }
    };

    return (
        <Box
            className={path === '/' ? 'registro registro_Inicio w-50' : 'registro w-50'}
        >
            <Typography variant="h4" gutterBottom align="center"
                sx={{color:"black"}}
            >
                Regístrate
            </Typography>
            <div className='item_Registro'>
                <TextField
                    required
                    fullWidth
                    variant="outlined"
                    label="Correo Electrónico"
                    margin="normal"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />
            </div>
            <div className='item_Registro'>
                <TextField
                    required
                    fullWidth
                    variant="outlined"
                    label="Nombre"
                    margin="normal"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className='item_Registro'>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Contraseña"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                />
            </div>
            <div className='item_Registro'>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Repita Contraseña"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    value={repetirContraseña}
                    onChange={(e) => setRepetirContraseña(e.target.value)}
                />
            </div>

            <div className='mt-4'>
                <Button
                    variant="contained"
                    onClick={manejarRegistro}
                    sx={{ backgroundColor: 'black', color: 'white' }}
                    fullWidth
                >
                    Regístrate
                </Button>
            </div>
        </Box>
    );
}

export default FormularioRegistro;