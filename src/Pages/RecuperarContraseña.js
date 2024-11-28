import React, { useState } from 'react';
import { Button, TextField, CircularProgress, Typography } from '@mui/material';
import './RecuperarContraseña.css'; // Importar archivo CSS para los estilos
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
      
      setTimeout(() => {
        setIsLoading(false);
        setMessage("Te hemos enviado un correo para recuperar tu contraseña.");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      setError("Hubo un error al enviar el correo, intenta de nuevo.");
    }
  };

  return (
    <div className="recuperar-container">
      <div className="form-container">
        <Typography variant="h4" gutterBottom>Recuperar Contraseña</Typography>
        <Typography variant="body1" paragraph>
          Ingresa tu correo electrónico y te enviaremos un enlace para recuperar tu contraseña.
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error}
            helperText={error}
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isLoading}
            className="submit-button"
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : "Recuperar Contraseña"}
          </Button>

          {message && <Typography color="success.main" mt={2}>{message}</Typography>}
        </form>
      </div>
    </div>
  );
}

export default RecuperarContraseña;
