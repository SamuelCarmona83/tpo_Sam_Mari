import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function ItemNavProj ({proyecto, eliminarProyecto, cambiarProyectoElegido}){

    const botonBorrar = () => {
        const confirmDelete = window.confirm(`¿Quieres borrar el proyecto "${proyecto.nombre}"?`);
        if (confirmDelete) {
            eliminarProyecto(proyecto.ID);
        }
    }

    const botonPresionado = () => {
        cambiarProyectoElegido(proyecto);
    }

    return (

        <li className='itemNavProy d-flex f-row'>
                <Button 
                    sx={{color:'white', width:'100%'}}
                    variant='text'
                    onClick={botonPresionado}
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