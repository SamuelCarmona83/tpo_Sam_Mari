import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validarCorreo = (correo) => {
        const vali = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return vali.test(correo);
    };

    const manejarRegistro = (event) => {
        event.preventDefault();
        
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                maxWidth: 400,
                margin: '0 auto',
                padding: 2,
                border: '1px solid #ccc',
                borderRadius: '8px',
            }}
        >
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Registro
            </Typography>

            {/* Campo Nombre */}
            <TextField
                label="Nombre"
                variant="outlined"
                fullWidth
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            {/* Campo Email */}
            <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            {/* Campo Contraseña */}
            <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {/* Campo Confirmar Contraseña */}
            <TextField
                label="Confirmar Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {/* Botón Registrarse */}
            <Button
                variant="contained"
                color="primary"
                onClick={manejarRegistro}
                sx={{ marginTop: 2 }}
            >
                Registrarse
            </Button>
        </Box>
    );
};

export default Registro;
