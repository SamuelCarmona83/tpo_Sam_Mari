import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

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
            <Button variant='text' 
                sx={{
                    color: 'green',
                    width:'42px'
                }}>
                <DeleteIcon />
            </Button>
        </li>
    );
}

export default ItemNavProj;