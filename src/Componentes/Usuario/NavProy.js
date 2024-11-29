import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemNavProy from './ItemNavProy';
import {getProyectos, crearProyecto, eliminarProyectoApi} from '../../Api/apiProyectos';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Typography } from '@mui/material';

function NavProy(props) {
    const actualizarApp = props.actualizar;
    const [proyectos, setProyectos] = useState([]);
    const [cantidad, setCantidad] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [nombre, setNombreProyecto] = React.useState('');

    useEffect( async () => {
        const llamadaProyectos = async () => {
            try {
                let respuesta = await getProyectos();
                
                if(respuesta.status === 200){
                    const data = await respuesta.json(); // Asegúrate de esperar a que la promesa de `json()` se resuelva
                    setProyectos(data); 
                    setCantidad(data.length || 0);
                }else{
                    setProyectos([]);
                }
                
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        await llamadaProyectos();
    }, [])

    

    const eliminarProyecto = async (proyectoID) => {
        try {
            await eliminarProyectoApi(proyectoID);
            const nuevaListaProyectos = await getProyectos();
            if (nuevaListaProyectos.status === 200) {
                const data = await nuevaListaProyectos.json();
                setProyectos(data);
                setCantidad(data.length); 
            }
        } catch (error) {
            console.log("Error al eliminar el proyecto:", error);
        }
    };
    

    const abrirFormulario = () => {
        setOpen(true);
    };

    const botonCerrar = () => {
        setOpen(false);
    };

    const crearNuevoProyecto = async () => {
        try {
            await crearProyecto(nombre);
            const nuevaListaProyectos = await getProyectos();
            if (nuevaListaProyectos.status === 200) {
                const data = await nuevaListaProyectos.json();
                setProyectos(data);
                setCantidad(data.length); 
            }
            botonCerrar();
            setNombreProyecto('');
        } catch (error) {
            console.log("Error al crear el proyecto:", error);
        }
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
                            actualizarApp={actualizarApp}
                            eliminarProyecto={eliminarProyecto}
                        />
                    )
                })}
            </ul>
        </div>
    );
}

export default NavProy;
