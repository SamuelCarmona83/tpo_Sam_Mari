import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {getProyectobyID} from '../../Backend/BD';
import ParticipantesList from './ParticipantesList';
import InfoProyecto from './InformacionProyecto';
import {Button} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


function Proyecto({ proyectoID }) {
    let ProySeleccionado;
    if(proyectoID != 'n'){
        ProySeleccionado = getProyectobyID(proyectoID);
    }

    const [alignment, setAlignment] = React.useState('datos');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    let headerProyecto;
    if (proyectoID !== 'n'){
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
                    aria-label="Platform"
                >
                    <ToggleButton value="datos">Datos</ToggleButton>
                    <ToggleButton value="participantes" >Participantes</ToggleButton>
                    <ToggleButton value="Gastos">Gastos</ToggleButton>
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
                    <InfoProyecto />
                )
                break
            case 'participantes': 
                main = (
                    <ParticipantesList 
                        proyectoID={proyectoID} 
                    />
                );
                break;
            default:
                main = (
                    <h1>configuración</h1>
                )
            }
    }

    return (
        <article id='proyecto' className='proyecto box'>
            {headerProyecto}
            <div id='mainProyecto'>
                {main}
            </div>
        </article>
    );
}

export default Proyecto;