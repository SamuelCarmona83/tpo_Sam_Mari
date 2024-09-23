import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import foto1 from './../../imagenes/rueda-dentada.svg'
const proyectos = [{
    nombre:"proyecto pepito",
    ID: 0
},{
    nombre:"proyecto 2",
    ID: 1
},{
    nombre:"proyecto 3",
    ID: 2
}];



function Proyecto ({proyectoID}) {
    const [alignment, setAlignment] = React.useState('datos');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    let headerProyecto;
    if (proyectoID != 'n'){
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
    }else {
        headerProyecto = (
            <h2>Bienvenidos, elija un proyecto!</h2>
        );
    }


    let main;

    console.log(alignment);
    if(proyectoID != 'n'){
        switch (alignment){
            case 'datos':
                main = (
                    <h1>datos</h1>
                )
                break
            case 'participantes':
                main = (
                    <h1>participantes</h1>
                )
                break
            case 'configuración':
                main = (
                    <h1>configuración</h1>
                )
                break
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