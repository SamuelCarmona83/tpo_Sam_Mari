import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Participantes from './Participantes';
import imagen4 from '../../imagenes/agregarUsuario.png';
import {getParticipantes, getProyectos, getUsuarios} from '../../Backend/BD';





function Proyecto({ proyectoID }) {
    let proyectos = getProyectos();
    let participantes = getParticipantes(proyectos[proyectoID].partici);

    const [alignment, setAlignment] = React.useState('datos');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    let headerProyecto;
    if (proyectoID !== 'n'){
        let titulo = proyectos[proyectoID].nombre;
        headerProyecto = (
            <div id='navProyecto'>
                <h2>{titulo}</h2>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="datos">Datos</ToggleButton>
                    <ToggleButton value="participantes" >Participantes</ToggleButton>
                    <ToggleButton value="configuración">Configuración</ToggleButton>
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

    if(proyectoID !== 'n'){
        switch (alignment){
            case 'datos':
                main = (
                    <h1>datos</h1>
                )
                break
            case 'participantes':
                const participantesDelProyecto = proyectos[proyectoID].partici || [];   
                main = (
                    <article>
                        {participantesDelProyecto.map(index => (
                            <Participantes 
                            imagen={participantes[index].imagen} 
                            nombre={participantes[index].nombre} 
                            ID={participantes[index].ID} 
                            collap="#collapseOne" 
                            monto={participantes[index].monto} />
                        ))}
                    <button className="boton-agregar">
                        <img src={imagen4} className="imagen-agregar" alt="Descripción de la imagen" />
                    </button>
                    </article>
                );
                break;
            default:
                main = (
                    <h1>configuración</h1>
                )
            }
    }

    return (
        <article className='proyecto vh-n'>
            {headerProyecto}
            <div id='mainProyecto'>
                {main}
            </div>
        </article>
    );
}

export default Proyecto;