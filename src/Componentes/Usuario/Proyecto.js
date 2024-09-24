import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Participantes from './Participantes';
import imagen1 from '../../imagenes/mari.jpeg';
import imagen2 from '../../imagenes/samu.jpeg';
import imagen3 from '../../imagenes/corazon.png';
import imagen4 from '../../imagenes/agregarUsuario.png';




const proyectos = [{
    nombre: "proyecto pepito",
    ID: 0,
    partici: [0, 1, 3,0]
}, {
    nombre: "proyecto 2",
    ID: 1,
    partici: [0, 1, 3]

}, {
    nombre: "proyecto 3",
    ID: 2,
    partici: [0, 1]
}];

const participantes = [
    {
        participante: <Participantes imagen={imagen1} nombre="Mariangel" ID="001" collap="#collapseOne" monto="300" />
    },
    {
        participante: <Participantes imagen={imagen2} nombre="Samuel" ID="002" collap="#collapseTwo" monto="500" />
    },
    {
        participante: <Participantes nombre="Jose Alejandro" ID="003" collap="#collapseThree" />
    },
    {
        participante: <Participantes imagen={imagen3} nombre="Eddymar Orellana" ID="004"></Participantes>
    }
];




function Proyecto({ proyectoID }) {
    const [alignment, setAlignment] = React.useState('datos');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    let headerProyecto;
    if (proyectoID != 'n') {
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
            <h2>Bienvenidos, elija un proyecto!</h2>
        );
    }


    let main;

    console.log(alignment);
    if (proyectoID != 'n') {
        switch (alignment) {
            case 'datos':
                main = (
                    <h1>datos</h1>
                )
                break
            case 'participantes':
                const participantesDelProyecto = proyectos[proyectoID].partici || [];
                main = participantesDelProyecto.map(index => (
                    <div key={index}>{participantes[index].participante}</div>
                ));
                break;
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
                <button className="boton-agregar"><img src={imagen4} className="imagen-agregar" alt="Descripción de la imagen" />
</button>

            </div>
        </article>
    );
}

export default Proyecto;