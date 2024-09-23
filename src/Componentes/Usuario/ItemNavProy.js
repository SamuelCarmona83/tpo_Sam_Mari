import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function ItemNavProj (props){
    const actualizar = props.actualizar;
    let id = props.id;
    let nombre = props.nombre;
    let elegido = props.ProyIDSeleccionado;

    return (
        <li className='itemNavProy d-flex f-row'>
            <h3>
                {nombre}
            </h3>
            <Checkbox 
            {...label} 
            onChange={()=> actualizar(id)}
            checked = {elegido === id}
            />
        </li>
    );
}

export default ItemNavProj;