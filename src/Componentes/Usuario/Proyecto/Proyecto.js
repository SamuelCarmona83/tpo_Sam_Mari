import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, DialogActions, DialogContent, TextField, DialogTitle, Dialog, ToggleButtonGroup, ToggleButton} from '@mui/material';
import ParticipantesList from './ParticipantesList';
import InfoProyecto from './InformacionProyecto';
import EditIcon from '@mui/icons-material/Edit';
import Transacciones from './GastosYDeudas/Transacciones';
import GroupIcon from '@mui/icons-material/Group';
import FeedIcon from '@mui/icons-material/Feed';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

function Proyecto({ proyectoElegido }) {
    let proyecto = proyectoElegido;
    const [usuarios, setUsuarios] = useState(proyecto !== null ? proyecto.usuarios : []);
    const [cantidad, setCantidad] = useState(0);
    const [open, setOpen] = useState(false);
    const [nombre, setNombreUsuario] = useState('');
    const [alignment, setAlignment] = useState('datos');
    const [estadoFormulario, setEstado] = useState(false);
    const [nombreProyecto, setNombre] = useState('');
    let proyectoID = proyecto !== null ? proyecto.ID : null;
    
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const abrirFormulario = () => {
        setOpen(true);
    };

    const botonCerrar = () => {
        setOpen(false);
    };

    const crearNuevoUsuario = () => { //todo por implementar api aca
        const nuevoUsuario = {
            ID: cantidad,
            nombre: nombre,
            imagen: '../../imagenes/mari.jpeg',
            monto: '300'
        };

        //agregarUsuario(nuevoUsuario);
        setUsuarios(prevUsuarios => [...prevUsuarios, nuevoUsuario]);
        //agregarParticipante(proyectoID, usuarios.length - 1);

        botonCerrar();
        setNombreUsuario('');
        setCantidad(cantidad + 1);
    };

    const eliminarParticipante = () => {
        setCantidad(cantidad - 1); 
    };

    let ProySeleccionado = proyecto;
    let nombreProyectoSeleccionado = ProySeleccionado ? ProySeleccionado.nombre : '';
    
    const cerrarFormularioDelNombre = () => {
        setNombre(ProySeleccionado.nombre);
        setEstado(false);
    }
    const botonEditar = () =>  {
        nombreProyectoSeleccionado = nombreProyecto;
        setEstado(false);
    }

    let headerProyecto;
    if (proyectoID && proyecto) {
        headerProyecto = (
            <nav id='navProyecto'>
                <div className='d-flex f-row justify-content-between align-items-center'>
                    <h2>{proyecto.nombre}</h2>
                    <Button 
                        variant='text'
                        sx={{
                            height: "25px",
                            color: 'grey',
                        }}
                        onClick={() => setEstado(true)}
                    > 
                        <EditIcon />
                    </Button>
                </div>
                
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Plataforma"
                >
                    <ToggleButton value="datos"><FeedIcon/></ToggleButton>
                    <ToggleButton value="participantes" ><GroupIcon /></ToggleButton>
                    <ToggleButton value="transacciones"><ReceiptLongIcon /></ToggleButton>
                </ToggleButtonGroup>

                <Dialog open={estadoFormulario} onClose={cerrarFormularioDelNombre}>
                    <DialogTitle>Agregar Participante</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="Nombre del Proyecto"
                            label="Nombre del Proyecto"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={nombreProyecto}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={cerrarFormularioDelNombre} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={botonEditar} color="primary">
                            Editar
                        </Button>
                    </DialogActions>
                </Dialog>
            </nav>
        );
    } else {
        headerProyecto = (
            <div id='navProyecto'>
                <h2>Bienvenidos, elija un proyecto para comenzar!</h2>
            </div>
        );
    }

    let main;
    if (proyectoID && proyecto) {
        switch (alignment) {
            case 'datos':
                main = <InfoProyecto proyecto={proyecto}/>;
                break;
            case 'participantes':
                main = <ParticipantesList proyecto={proyecto} abrir={abrirFormulario}/>;
                break;
            //case 'transacciones':
                //main = <Transacciones proyecto={proyecto} />;
                //break;
            default:
                main = <InfoProyecto proyecto={proyecto}/>;
        }
    }

    return (
        <article id="proyecto" className="proyecto box">
            {headerProyecto}
            <div id="mainProyecto">{main}</div>

            <Dialog open={open} onClose={botonCerrar}>
                <DialogTitle>Agregar Participante</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="nombreParticipante"
                        label="Nombre participante"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={nombre}
                        onChange={(e) => setNombreUsuario(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={botonCerrar} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={crearNuevoUsuario} color="primary">
                        Agregar
                    </Button>
                </DialogActions>
            </Dialog>
        </article>
    );
}

export default Proyecto;