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
import { getProyectobyID } from '../../../Api/apiProyectos';
import { gastosUsuarioPorProyecto } from '../../../Api/apiGastos';

export default function InfoProyecto({ proyectoID, calcularAbonado }) {
    const [proyecto, setProyecto] = useState(null);
    const [gastos, setGastos] = useState([]);
    const [totalGastos, setTotalGastos] = useState(0);
    const [abonadoPorUsuario, setAbonadoPorUsuario] = useState(0);
    const [nuevaDescripcion, setDescripcion] = useState('');
    const [estadoFormulario, setEstado] = useState(false);

    const usuarioID = sessionStorage.getItem('usuarioID');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const proyectoData = await getProyectobyID(proyectoID);
                setProyecto(proyectoData);
                setDescripcion(proyectoData.descripcion); // Inicializa la descripción del formulario
            } catch (error) {
                console.error('Error al obtener el proyecto:', error);
            }
        };

        const fetchGastos = async () => {
            try {
                const gastosData = await gastosUsuarioPorProyecto(proyectoID, usuarioID);
                setGastos(gastosData);

                let total = 0;
                for (const gasto of gastosData) {
                    const montoGasto = parseFloat(gasto.monto);
                    total += montoGasto;
                }
                setTotalGastos(total);
            } catch (error) {
                console.error('Error al obtener los gastos:', error);
            }
        };

        const fetchAbonado = async () => {
            try {
                const abonado = await calcularAbonado(usuarioID);
                setAbonadoPorUsuario(abonado);
            } catch (error) {
                console.error('Error al calcular el abonado:', error);
            }
        };

        fetchData();
        fetchGastos();
        fetchAbonado();
    }, [proyectoID, usuarioID, calcularAbonado]);

    const abrirFormulario = () => {
        setEstado(true);
    };

    const botonCancelar = () => {
        if (proyecto) {
            setDescripcion(proyecto.descripcion);
        }
        setEstado(false);
    };

    const botonEditar = () => {
        if (proyecto) {
            proyecto.descripcion = nuevaDescripcion; // Aquí puedes realizar una llamada para actualizar la descripción
        }
        setEstado(false);
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
                <div className="gastoTotal">
                    <Typography variant="h6" gutterBottom sx={{ marginTop: '10px' }}>
                        Gasto Total
                    </Typography>
                    <Divider />
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        sx={{ marginTop: '10px', color: 'red' }}
                    >
                        {totalGastos.toFixed(2)}
                    </Typography>
                </div>
            </div>
            <Divider />
            <Typography variant="h5" sx={{ margin: '15px' }}>
                Balance Personal
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
                    <Typography variant="h6">Abonado</Typography>
                    <Typography variant="body1" sx={{ color: 'green' }}>
                        {abonadoPorUsuario.toFixed(2)}
                    </Typography>
                </Box>
            </Box>
            <Divider />

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
