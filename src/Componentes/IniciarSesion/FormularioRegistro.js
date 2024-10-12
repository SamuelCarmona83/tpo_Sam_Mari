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
            className='w-50 registro fondoRegistro'
            sx={{
                padding: '20px',
                borderRadius: '12px',
                boxShadow: 2,
                backgroundColor: path === '/' ? 'white' : ''
            }}
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
