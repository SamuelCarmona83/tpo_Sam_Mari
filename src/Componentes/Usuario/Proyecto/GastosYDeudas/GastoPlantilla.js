import { Typography , Button} from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { nombreDelUsuarioPorID } from '../../../../Servicios/ProyectosFunciones';
export default function GastoPlantilla ({gasto, borrar, proyecto}) {

    const botonBorrar = () => {
        const confirmDelete = window.confirm(`¿Quieres borrar "${gasto.descripcion}"?`);
        if (confirmDelete) {
            borrar(gasto.ID);
        }
    }
    return (
        <li>
            <Button variant='text'
                sx={{
                    borderColor: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <figure>
                    <img src={gasto.imagen} alt='ticket de compra'/>
                </figure>
            </Button>
            <Typography variant='subtitle1' 
                sx={{flex: 2 }}
            >
                {gasto.descripcion}
            </Typography>
            <Typography variant='subtitle1' 
                sx={{flex: 1 }}
            >
                {nombreDelUsuarioPorID(proyecto, gasto.usuarioID)}
            </Typography>
            <Typography variant='subtitle2' 
                sx={{flex: 1 }}
            >
                {gasto.createdAt.slice(0, 10)}
            </Typography>
            <Typography variant='h5' 
                sx={{ flex: 1,}}
            >
                {gasto.monto}
            </Typography>
            <Button 
                variant='text'
                sx={{
                color: 'grey',
                width:'42px'}}
                onClick={botonBorrar}
            >
                <DeleteIcon />
            </Button>
        </li>
    )
}