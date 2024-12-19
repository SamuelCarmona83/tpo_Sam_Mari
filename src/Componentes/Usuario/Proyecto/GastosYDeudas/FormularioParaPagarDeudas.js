import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, MenuItem} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { deudasImpagasUsuarioPorProyecto } from '../../../../Api/apiDeudas';
import { nombreDelUsuarioPorID } from '../../../../Servicios/ProyectosFunciones';

export default function FormularioParaPagarDeudas ({proyecto, visibilidad, cerrar, actualizarApp}) {
    const [imagen, setImagen] = useState(null);
    const usuarioID = Number(sessionStorage.getItem("usuarioID")); 
    let listaDeudasImpagas = proyecto.deudas.filter((deuda) => {
        return deuda.pagada === false && deuda.deudorId === usuarioID;
    });
    const [deudaElegida, setDeudaElegida] = useState(null);
    console.log("proyecto.deudas");
    console.log(proyecto.deudas);
    console.log("listaDeudasImpagas");
    console.log(listaDeudasImpagas);
    console.log("deudaElegida");
    console.log(deudaElegida);
    const cerrarFormulario = () => {

        cerrar();
    }

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

    const botonPagar = () => {

        cerrar();
    }

    return (
        <Dialog open={visibilidad} onClose={cerrarFormulario}>
            <DialogTitle>Elija la Deuda a Saldar</DialogTitle>
            <DialogContent>
            <TextField
                select
                fullWidth
                label="Elija la deuda a Saldar"
                defaultValue={deudaElegida || "Sin Deudas"}
                onChange={(e) => setDeudaElegida(e.target.value)}
                helperText="Seleccione una"
                margin="normal"
            >
                {listaDeudasImpagas.map((deuda) => (
                    <MenuItem key={deuda.ID} value={deuda}>
                        Cobrador {nombreDelUsuarioPorID(proyecto, deuda.cobradorId)} monto: ${deuda.monto}
                    </MenuItem>
                ))}
            </TextField>
                
                <Button variant="contained" component="label" fullWidth startIcon={<PhotoCamera />}
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
                <Button onClick={botonPagar} color="primary">
                    Pagar
                </Button>
            </DialogActions>
        </Dialog>
    )
}