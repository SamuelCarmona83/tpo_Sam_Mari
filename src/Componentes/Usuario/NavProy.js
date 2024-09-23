import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemNavProj from './ItemNavProy';

const proyectos = [{
    nombre:"proyecto 1",
    ID: 0
},{
    nombre:"proyecto 2",
    ID: 1
},{
    nombre:"proyecto 3",
    ID: 2
}];


function NavProy (props) {
    const actualizar = props.actualizar;
    const ProyIDSeleccionado = props.proyectoIDSeleccionado;
    
    return(
        <ul id='proyectos' className='navProy container vh-n'>
            {proyectos.map((i, index) => {
                return <ItemNavProj 
                    key={index} 
                    actualizar={actualizar} 
                    id={i.ID}
                    nombre={i.nombre}
                    ProyIDSeleccionado = {ProyIDSeleccionado}
                    />
                })
            }
        </ul>
    );
}

export default NavProy;