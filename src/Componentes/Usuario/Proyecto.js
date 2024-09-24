import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Participantes from './Participantes';
import imagen1 from '../../imagenes/mari.jpeg';
import imagen2 from '../../imagenes/samu.jpeg';

const proyectos = [{
    nombre:"proyecto pepito",
    ID: 0,
    partici: [0,1,3]
},{
    nombre:"proyecto 2",
    ID: 1,
    partici: [0,1,3]

},{
    nombre:"proyecto 3",
    ID: 2,
    partici: [0,1]
}];

const participantes = [
    {
      participante: <Participantes imagen= {imagen1} nombre="Mariangel" ID="001" collap="#collapseOne" monto="300" />
    },
    {
      participante: <Participantes imagen= {imagen2} nombre="Samuel" ID="002" collap="#collapseTwo" monto="500"/>
    },
    {
      participante: <Participantes nombre="Jose Alejandro" ID="003" collap= "#collapseThree" />
    },
    {
      participante: <Participantes nombre="Eddymar Orellana" ID="004"></Participantes>
    }
  ];
  



function Proyecto ({proyectoID}) {
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
    }else {
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
                main = participantesDelProyecto.map(index => (
                    <div key={index}>{participantes[index].participante}</div>
                ));
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