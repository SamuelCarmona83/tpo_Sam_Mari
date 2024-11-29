import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, DialogActions, DialogContent, TextField, DialogTitle, Dialog, ToggleButtonGroup, ToggleButton} from '@mui/material';
import { getProyectobyID, getUsuarios, agregarUsuario, agregarParticipante} from '../../Backend/BD';
import ParticipantesList from './ParticipantesList';
import InfoProyecto from './InformacionProyecto';
import EditIcon from '@mui/icons-material/Edit';
import Transacciones from '../Usuario/Transacciones';
import GroupIcon from '@mui/icons-material/Group';
import FeedIcon from '@mui/icons-material/Feed';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

function Proyecto({ proyectoID }) {
    let proyecto = [];
    if (proyectoID !== 'n') {
        proyecto = getProyectobyID(proyectoID);
    }
    
    const [usuarios, setUsuarios] = React.useState(getUsuarios());
    const [cantidad, setCantidad] = React.useState(usuarios.length || 0);
    const [open, setOpen] = React.useState(false);
    const [nombre, setNombreUsuario] = React.useState('');

    const abrirFormulario = () => {
        setOpen(true);
    };

    const botonCerrar = () => {
        setOpen(false);
    };

    const crearNuevoUsuario = () => {
        const nuevoUsuario = {
            ID: cantidad,
            nombre: nombre,
            imagen: '../../imagenes/mari.jpeg',
            monto: '300'
        };

        agregarUsuario(nuevoUsuario);
        setUsuarios(prevUsuarios => [...prevUsuarios, nuevoUsuario]);
        agregarParticipante(proyectoID, usuarios.length-1);
        
        botonCerrar();
        setNombreUsuario('');
        setCantidad(cantidad + 1);
    };

    const eliminarParticipante = () => {
        setCantidad(cantidad - 1);
    };
    
    //      Metodos para calcular datos     //
    const calcularAbonadoPorUsuario = (usuarioID) =>  {//TODO Rompiendo aca
        let abonado = 0;
        let gastos = proyecto.gastos;
        let pagos = proyecto.pagos;

        for (let i=0; i<gastos.length; i++){
            if (gastos[i].usuarioID === usuarioID) {
                abonado += gastos[i].monto;
            }
        }

        for (let i=0; i<pagos.length; i++) {
            if (pagos[i].usuarioID === usuarioID) {
                abonado += pagos[i].monto;
            }
        }

        return abonado;
    }

    const [alignment, setAlignment] = React.useState('datos');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    //      Formulario para editar el nombre del proyecto   //
    let ProySeleccionado = getProyectobyID(proyectoID);
    let nombreProyectoSeleccionado = ProySeleccionado ? ProySeleccionado.nombre : '';
    let [nombreProyecto, setNombre] = React.useState(nombreProyectoSeleccionado);
    let [estadoFormulario, setEstado] = React.useState(false);

    const cerrarFormularioDelNombre = () => {
        setNombre(ProySeleccionado.nombre);
        setEstado(false);
    }
    const botonEditar = () =>  {
        nombreProyectoSeleccionado = nombreProyecto;
        setEstado(false);
    }

    const desplegarFormulario = () => {
        setEstado(true);
    }

    //      Generando el contenido del proyecto     //
    //      Barra de nagegacion y contenido //
    let headerProyecto;
    if (proyectoID !== 'n') {
        headerProyecto = (
            <nav id='navProyecto'>
                <div className='d-flex f-row justify-content-between align-items-center'>
                    <h2>{nombreProyectoSeleccionado}</h2>
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

    if (proyectoID !== 'n') {
        switch (alignment) {
            case 'datos':
                main = <InfoProyecto proyectoID={proyectoID} calcularAbonado={calcularAbonadoPorUsuario} />;
                break;
            case 'participantes':
                main = <ParticipantesList proyectoID={proyectoID} abrir= {abrirFormulario} calcularAbonado={calcularAbonadoPorUsuario}/>;

                break;
            case 'transacciones':
                main = <Transacciones proyectoID={proyectoID} />
                break
            default:
                main = <InfoProyecto proyectoID={proyectoID} calcularAbonado={calcularAbonadoPorUsuario} />;
        }
    }

    return (
        <article id='proyecto' className='proyecto box'>
            {headerProyecto}
            <div id='mainProyecto'>
                {main}
            </div>

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
                    <Button onClick={() => crearNuevoUsuario(nombre)} color="primary">
                        Agregar
                    </Button>
                </DialogActions>
            </Dialog>
        </article>
    );
}

export default Proyecto;
