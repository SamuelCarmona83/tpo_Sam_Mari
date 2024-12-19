import React, { useState, useEffect } from 'react';
import {
    Typography,
    Divider,
    Button,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { gastosTotalesDelProyecto, SumaDeGastosPorUsuario } from '../../../Servicios/GastosFunciones';
import { totalAdeudadoPorUsuario, totalImpagoDelProyecto, totalPorCobrarPorUsuario } from '../../../Servicios/DeudasFunciones';
import { modificarDescripcionDelProyecto } from '../../../Api/apiProyectos';

export default function InfoProyecto({proyecto, actualizarApp}) {
    const [nuevaDescripcion, setDescripcion] = useState('');
    const [estadoFormulario, setEstado] = useState(false);
    const usuarioID = Number(sessionStorage.getItem('usuarioID'));

    const abrirFormulario = () => {
        setEstado(true);
        setDescripcion(proyecto.descripcion);
    };

    const botonCancelar = () => {
        if (proyecto) {
            setDescripcion(proyecto.descripcion);
        }
        setEstado(false);
    };

    const botonEditar = async () => {
        try{
            await modificarDescripcionDelProyecto(proyecto.ID, nuevaDescripcion);
        }catch(error){
            console.log("### ERROR en el try de manejarEnvio/FormularioEditarNombre/Proyecto.js");
        }
        botonCancelar();
        actualizarApp(proyecto.ID);
    };

    if (!proyecto) {
        return <Typography>Cargando información del proyecto...</Typography>;
    }

    return (
        <article id="infoProyecto">
            <div className="descripcion d-flex f-row justify-content-between">
                <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ maxWidth: '75%', padding: '15px' }}
                >
                    {proyecto.descripcion}
                </Typography>
                <Button
                    variant="text"
                    sx={{
                        height: '25px',
                        color: 'grey',
                        marginTop: '15px',
                    }}
                    onClick={abrirFormulario}
                >
                    <EditIcon />
                </Button>
                
            </div>
            <Divider />

            <Typography variant="h5" sx={{ margin: '15px' }}>
                Resumen: 
            </Typography>
            <Box sx={{ display: 'flex', marginBottom: '15px' }}>
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6">Gastos Totales</Typography>
                    <Typography variant="body1" sx={{ color: 'green' }}>
                        ${gastosTotalesDelProyecto(proyecto)}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6">Deudas Impagas Totales</Typography>
                    <Typography variant="body1" sx={{ color: 'red' }}>
                        ${totalImpagoDelProyecto(proyecto)}
                    </Typography>
                </Box>
            </Box>

            <Divider />
            
            <Typography variant="h5" sx={{ margin: '15px' }}>
                Balance Personal:
            </Typography>
            <Box sx={{ display: 'flex', marginBottom: '15px' }}>
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6">Gastos Reportados</Typography>
                    <Typography variant="body1" sx={{ color: 'green' }}>
                        ${SumaDeGastosPorUsuario(proyecto, usuarioID)}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6">Total Deudas</Typography>
                    <Typography variant="body1" sx={{ color: 'red' }}>
                        ${totalAdeudadoPorUsuario(proyecto, usuarioID)}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h6">Ingresos pendientes</Typography>
                    <Typography variant="body1" sx={{ color: 'red' }}>
                        ${totalPorCobrarPorUsuario(proyecto, usuarioID)}
                    </Typography>
                </Box>
            </Box>
            

            <Dialog open={estadoFormulario} onClose={botonCancelar}>
                <DialogTitle>Editar Descripción del Proyecto</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Descripcion del Proyecto"
                        label="Descripción del Proyecto"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={nuevaDescripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={botonCancelar} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={botonEditar} color="primary">
                        Editar
                    </Button>
                </DialogActions>
            </Dialog>
        </article>
    );
}
