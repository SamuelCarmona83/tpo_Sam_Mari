import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { sacarProyecto } from '../../Backend/BD';

function ItemNavProj ({actualizar, proyecto, eliminarProyecto}){

    const botonBorrar = () => {
        const confirmDelete = window.confirm(`¿Quieres borrar el proyecto "${proyecto.nombre}"?`);
        if (confirmDelete) {
            sacarProyecto(proyecto.ID);
            actualizar('n');
            eliminarProyecto();
        }
    }

    return (

        <li className='itemNavProy d-flex f-row'>
                <Button 
                    sx={{color:'white', width:'100%'}}
                    variant='text'
                    onClick={() => {actualizar(proyecto.ID)}}
                >
                    <Typography variant='subtitle'>
                        {proyecto.nombre}
                    </Typography>
                </Button>
                <Button 
                    variant='text'
                    sx={{
                    color: 'white',
                    width:'42px'}}
                    onClick={botonBorrar}
                >
                    <DeleteIcon />
                </Button>
            </li>
    );
}

export default ItemNavProj;