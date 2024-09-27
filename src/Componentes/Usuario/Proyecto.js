import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getProyectobyID, getUsuarios, agregarUsuario, agregarParticipante, getProyectos } from '../../Backend/BD';
import ParticipantesList from './ParticipantesList';
import InfoProyecto from './InformacionProyecto';
import imagen4 from '../../imagenes/agregarUsuario.png';
import imagen5 from '../../imagenes/mari.jpeg';
import EditIcon from '@mui/icons-material/Edit';


function Proyecto({ proyectoID }) {
    let proyectos = getProyectos();
    console.log(proyectos);
    
    
    const [usuarios, setUsuarios] = React.useState(getUsuarios());
    const [cantidad, setCantidad] = React.useState(usuarios.length || 0);
    const [open, setOpen] = React.useState(false);
    const [nombre, setNombreUsuario] = React.useState('');

    const eliminarParticipante = () => {
        setCantidad(cantidad - 1);
    };

    const abrirFormulario = () => {
        setOpen(true);
    };

    const botonCerrar = () => {
        setOpen(false);
    };

    const crearNuevoUsuario = () => {
        const nuevoUsuario = {
            ID: String(cantidad + 1).padStart(3, '0'),
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
    

    let ProySeleccionado;
    if (proyectoID !== 'n') {
        ProySeleccionado = getProyectobyID(proyectoID);
    }

    const [alignment, setAlignment] = React.useState('datos');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    let headerProyecto;
    if (proyectoID !== 'n') {
        headerProyecto = (
            <div id='navProyecto'>
                <div className='d-flex f-row justify-content-between align-items-center'>
                    <h2>{ProySeleccionado.nombre}</h2>
                    <Button 
                        variant='text'
                        sx={{
                            height: "25px",
                            color: 'grey',
                        }}
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
                    <ToggleButton value="datos">Datos</ToggleButton>
                    <ToggleButton value="participantes" >Participantes</ToggleButton>
                    <ToggleButton value="transacciones">Transacciones</ToggleButton>
                </ToggleButtonGroup>
            </div>
        );
    } else {
        headerProyecto = (
            <div id='navProyecto'>
                <h2>Bienvenidos, elija un proyecto!</h2>
            </div>
        );
    }

    let main;

    if (proyectoID !== 'n') {
        switch (alignment) {
            case 'datos':
                main = <InfoProyecto />;
                break;
            case 'participantes':
                main = <ParticipantesList proyectoID={proyectoID} abrir= {abrirFormulario} />;

                break;
            case 'transacciones':

                break
            default:
                main = <h1>Configuración</h1>;
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
