import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, DialogActions, DialogContent, TextField, DialogTitle, Dialog, ToggleButtonGroup, ToggleButton} from '@mui/material';
import ParticipantesList from './Participantes/ParticipantesList';
import InfoProyecto from './InformacionProyecto';
import EditIcon from '@mui/icons-material/Edit';
import Transacciones from './GastosYDeudas/Transacciones';
import GroupIcon from '@mui/icons-material/Group';
import FeedIcon from '@mui/icons-material/Feed';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { modificarNombreDelProyecto } from '../../../Api/apiProyectos';

function Proyecto({ proyectoElegido , actualizarApp}) {
    let proyecto = proyectoElegido;
    const [cantidad, setCantidad] = useState(0);
    const [alignment, setAlignment] = useState('datos');
    const [vistaFormNombre, setVistaFromNombre] = useState(false);
    let proyectoID = proyecto !== null ? proyecto.ID : null;
    
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const eliminarParticipante = () => {
        setCantidad(cantidad - 1); 
    };

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
                        onClick={() => setVistaFromNombre(true)}
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
                main = <InfoProyecto proyecto={proyecto} actualizarApp={actualizarApp}/>;
                break;
            case 'participantes':
                main = <ParticipantesList proyecto={proyecto} actualizarApp={actualizarApp}/>;
                break;
            case 'transacciones':
                main = <Transacciones proyecto={proyecto} actualizarApp={actualizarApp}/>;
                break;
            default:
                main = <InfoProyecto proyecto={proyecto}/>;
        }
    }

    const FormularioEditarNombre = () => {
        const [nombre, setNombre] = useState(proyecto.nombre);
        const manejarEnvio = async (e) => {
            e.preventDefault();
            try{
                await modificarNombreDelProyecto(proyecto.ID, nombre);
            }catch(error){
                console.log("### ERROR en el try de manejarEnvio/FormularioEditarNombre/Proyecto.js");
            }
            cerrarFormulario();
            actualizarApp(proyecto.ID);
        }
        const cerrarFormulario = () => {
            setVistaFromNombre(false);
        }
        return(
            <form onSubmit={manejarEnvio}>
                <div id='formularioAgregarParticipantes'>
                    <div>
                        <label htmlFor="nombre Proyecto">Editar Nombre: </label>
                        <input
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Edite el nombre aqui"
                            required
                        />
                        <button type="submit">Editar</button>
                        <button onClick={cerrarFormulario}>Cerrar</button>
                    </div>
                </div>
            </form>
        );
    }

    return (
        <article id="proyecto" className="proyecto box">
            {headerProyecto}
            <div id="mainProyecto">
                {main}
            </div>
            {vistaFormNombre && <FormularioEditarNombre />}
        </article>
    );
}

export default Proyecto;