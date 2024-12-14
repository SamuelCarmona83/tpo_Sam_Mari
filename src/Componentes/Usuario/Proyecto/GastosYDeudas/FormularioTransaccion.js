import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function FormularioTransaccion ({visibilidad, cerrar, crearT}) {
    const [descripcion, setDescripcion] = useState('');
    const [monto, setMonto] = useState('');
    const [fecha, setFecha] = useState('');
    const [imagen, setImagen] = useState(null);

    const cargarImagen = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagen(reader.result);
            };
            reader.readAsDataURL(file); // Lee la imagen como Data URL
        }
    };

    const botonGuardar = () => {
        let nuevoMonto = parseFloat(monto)
        const nuevaT = {
            ID: 0,
            imagen,
            descripcion,
            monto: nuevoMonto,
            usuarioID:0,
            fecha,
        };
        crearT(nuevaT);

        cerrarFormulario();
    };

    const cerrarFormulario = () => {
        setDescripcion('');
        setMonto('');
        setFecha('');
        setImagen(null);
        cerrar();
    }

    return (
        <Dialog open={visibilidad} onClose={cerrarFormulario}>
            <DialogTitle>Agregar Información del Proyecto</DialogTitle>
            <DialogContent>
                <TextField
                    label="Descripción"
                    fullWidth
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Monto"
                    fullWidth
                    type="number"
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Fecha"
                    fullWidth
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
                <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    startIcon={<PhotoCamera />}
                    sx={{ marginTop: 2 }}
                >
                    Subir Imagen
                    <input
                        type="file"
                        hidden
                        onChange={cargarImagen}
                    />
                </Button>
            </DialogContent>
            <DialogActions>
                <Button onClick={cerrarFormulario} color="primary">
                    Cancelar
                </Button>
                <Button onClick={botonGuardar} color="primary">
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>
    );
}
