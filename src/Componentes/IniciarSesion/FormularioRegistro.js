import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField, Box, Typography } from '@mui/material';

function FormularioRegistro() {
    return (
        <Box
            className='w-50 registro fondoRegistro'
            sx={{
                padding: '20px',
                borderRadius: '12px',
                boxShadow: 2, // Sombra suave
                backgroundColor: '#f5f5f5', // Color suave
                margin: '0 auto', // Centrar en el contenedor
                mt: 5 // Margen superior
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
