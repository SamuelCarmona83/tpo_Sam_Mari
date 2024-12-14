import { Typography , Button} from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { getUsuaruiByID } from '../../../../Backend/BD';

export default function TransaccionPlantilla ({transaccion, borrar}) {
    let usuario = getUsuaruiByID(transaccion.usuarioID);

    const botonBorrar = () => {
        const confirmDelete = window.confirm(`¿Quieres borrar "${transaccion.descripcion}"?`);
        if (confirmDelete) {
            borrar(transaccion.ID);
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
                    <img src={transaccion.imagen} alt='ticket de compra'/>
                </figure>
            </Button>
            <Typography variant='subtitle1' 
                sx={{flex: 2 }}
            >
                {transaccion.descripcion}
            </Typography>
            <Typography variant='subtitle1' 
                sx={{flex: 1 }}
            >
                {usuario.nombre}
            </Typography>
            <Typography variant='subtitle2' 
                sx={{flex: 1 }}
            >
                {transaccion.fecha}
            </Typography>
            <Typography variant='h5' 
                sx={{ flex: 1,}}
            >
                {transaccion.monto}
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