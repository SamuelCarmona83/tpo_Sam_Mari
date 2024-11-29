import React, { useState } from 'react';
import { Button, TextField, CircularProgress, Typography } from '@mui/material';
import './RecuperarContraseña.css'; 
import { recuperarContraseña } from '../Api/apiUsuarios'; 
  
import { Link } from 'react-router-dom';

function RecuperarContraseña() {
  const [email, setEmail] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); 
  const [message, setMessage] = useState(""); 
  const [error, setError] = useState(""); 

 
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setIsLoading(true); 
    setMessage(""); 
    setError(""); 

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor ingresa un correo electrónico válido.");
      setIsLoading(false); 
      return;
    }

    try {
      
      const response = await recuperarContraseña(email);
      if (response && response.status === 200) {
        setMessage('Te hemos enviado un correo para recuperar tu contraseña.'); 
      } else {
        const data = await response.json(); 
        setError(data.message || 'Hubo un error al enviar el correo.'); 
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Hubo un error al intentar enviar el correo. Intenta nuevamente.");
    }

    setIsLoading(false); 
  };

  return (
    <div className="recuperar-container">
      <div className="form-container">
        <Typography variant="h4" gutterBottom>Recuperar Contraseña</Typography>
        <Typography variant="body1" paragraph>
          Ingresa tu correo electrónico y te enviaremos un enlace para recuperar tu contraseña.
        </Typography>

        {/* Formulario para ingresar el correo electrónico */}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Actualizar el estado del correo
            error={!!error} // Mostrar error si existe
            helperText={error} // Mostrar texto de error si existe
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isLoading} // Deshabilitar el botón mientras está cargando
            className="submit-button"
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : "Recuperar Contraseña"} {/* Mostrar el spinner mientras se carga */}
          </Button>

          {/* Mostrar mensaje de éxito si lo hay */}
          {message && <Typography color="success.main" mt={2}>{message}</Typography>}
        </form>
      </div>
    </div>
  );
}

export default RecuperarContraseña;
