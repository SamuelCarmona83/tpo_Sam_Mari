
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Usamos useParams para obtener el id
import { Button, Form, Alert } from 'react-bootstrap';  // Usamos react-bootstrap para UI

function CambiarClave() {
  const { id } = useParams();  // Obtener el id del usuario desde la URL
  const navigate = useNavigate();  // Para redirigir después de cambiar la contraseña
  const [nuevaClave, setNuevaClave] = useState('');
  const [confirmarClave, setConfirmarClave] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificamos que las claves coincidan
    if (nuevaClave !== confirmarClave) {
      setError('Las claves no coinciden');
      return;
    }

    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/usuarios/cambiarClave/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id,nuevaClave }),
      });
      console.log(response);

      if (response.ok) {
        setMensaje('Clave cambiada exitosamente.');
        setError('');
        setNuevaClave('');
        setConfirmarClave('');
        setTimeout(() => {
          navigate('/iniciar-sesion'); 
        }, 2000);
      } else {
        const data = await response.json();
        setError(data.mensaje || 'Hubo un error al cambiar la clave.');
        setMensaje('');
      }
    } catch (error) {
      setError('Hubo un error de red. Intenta nuevamente.');
      setMensaje('');
    }
  };

  return (
    <div className="container">
      {/* Título del formulario */}
      <h2 className="text-center">Cambiar Clave</h2> {/* Título actualizado */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nuevaClave">
          <Form.Label>Nueva Clave</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu nueva clave"
            value={nuevaClave}
            onChange={(e) => setNuevaClave(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="confirmarClave">
          <Form.Label>Confirmar Clave</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirma tu nueva clave"
            value={confirmarClave}
            onChange={(e) => setConfirmarClave(e.target.value)}
            required
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        {mensaje && <Alert variant="success">{mensaje}</Alert>}
        <Button variant="primary" type="submit">
          Cambiar Clave
        </Button>
      </Form>
    </div>
  );
}

export default CambiarClave;
