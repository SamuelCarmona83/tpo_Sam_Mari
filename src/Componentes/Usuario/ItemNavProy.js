import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { sacarProyecto } from '../../Backend/BD';

function ItemNavProj ({actualizar, proyecto, eliminarProyecto}){

    const botonBorrar = () => {
        const confirmDelete = window.confirm(`¿Quieres borrar el proyecto "${proyecto.nombre}"?`);
        if (confirmDelete) {
            sacarProyecto(proyecto.ID)
            eliminarProyecto();
        }
    }

    return (

        <li className='itemNavProy d-flex f-row'>
                <Button 
                    sx={{color:'black'}}
                    variant='text'
                    onClick={() => {actualizar(proyecto.ID)}}
                >
                    <h5>
                        {proyecto.nombre}
                    </h5>
                </Button>
                <Button 
                    variant='text'
                    sx={{
                    color: 'blue',
                    width:'42px'}}
                    onClick={botonBorrar}
                >
                    <DeleteIcon />
                </Button>
            </li>
    );
}

export default ItemNavProj;