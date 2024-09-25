import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemNavProj from './ItemNavProy';
import {getProyectos} from '../../Backend/BD';

function NavProy (props) {
    const actualizar = props.actualizar;
    const ProyIDSeleccionado = props.proyectoIDSeleccionado;
    let proyectos = getProyectos();
    
    return(
        <div id='proyectos'>
            <ul  className='navProy container-fluid vh-n'>
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
        </div>
        
    );
}

export default NavProy;