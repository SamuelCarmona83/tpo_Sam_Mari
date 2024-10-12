import React, {useState} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField, Box, Typography } from '@mui/material';
import {useLocation} from 'react-router-dom';

function FormularioRegistro() {
    let location = useLocation();
    let path = location.pathname;
    console.log(path)
    return (
        <Box
            className={path === '/' ? 'registro registro_Inicio w-50' : 'registro w-50'}
        >
            <Typography variant="h4" gutterBottom align="center">
                Regístrate
            </Typography>
            <div className='item_Registro'>
                <TextField
                    required
                    fullWidth
                    variant="outlined"
                    label="Correo Electrónico"
                    margin="normal"
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
                />
            </div>

            <div className='mt-4'>
                <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white' }} fullWidth>
                    Regístrate
                </Button>
            </div>
        </Box>
    );
}

export default FormularioRegistro;
