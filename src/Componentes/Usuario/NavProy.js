import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemNavProy from './ItemNavProy';
import { agregarProyecto, getProyectos } from '../../Backend/BD';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Typography } from '@mui/material';

function NavProy(props) {
    const actualizar = props.actualizar;
    let proyectos = getProyectos();

    const [cantidad, setCantidad] = React.useState(proyectos.length || 0);
    const [open, setOpen] = React.useState(false); // Estado para manejar la visibilidad del diálogo
    const [nombre, setNombreProyecto] = React.useState(''); // Estado para el nombre del proyecto

    const eliminarProyecto = () => {
        setCantidad(cantidad - 1);
    };

    const abrirFormulario = () => {
        setOpen(true);
    };

    const botonCerrar = () => {
        setOpen(false);
    };

    const crearNuevoProyecto = () => {
        agregarProyecto(nombre);
        botonCerrar();
        setNombreProyecto('');
        setCantidad(cantidad + 1);
    };

    return (
        <div id='listaDeProyectos'>
            <div id='misProyectos'className='d-flex justify-content-between'>
                <Typography variant='h5' sx={{marginLeft: "0.5em"}}>
                    Mis Proyectos
                </Typography>
                <Button variant='outlined'
                    sx={{ color: 'green', alignItems: "center", marginRight : "1em"}} 
                    onClick={abrirFormulario}
                >
                    <div className='d-flex align-items-center'>
                        <Typography variant='subtitle' >
                            Nuevo
                        </Typography>
                    </div>
                </Button>
            </div>

            {/* Diálogo para crear el proyecto */}
            <Dialog open={open} onClose={botonCerrar}>
                <DialogTitle>Crear Proyecto</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="project-name"
                        label="Nombre del Proyecto"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={nombre}
                        onChange={(e) => setNombreProyecto(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={botonCerrar} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={crearNuevoProyecto} color="primary">
                        Crear
                    </Button>
                </DialogActions>
            </Dialog>

            <ul className='container-fluid box'>
                {proyectos.map((proyecto) => {
                    return (
                        <ItemNavProy 
                            key={proyecto.ID} 
                            proyecto={proyecto}
                            actualizar={actualizar}
                            eliminarProyecto={eliminarProyecto}
                        />
                    )
                })}
            </ul>
        </div>
    );
}

export default NavProy;
