import { Typography , Divider, Button} from '@mui/material';
import React from 'react';
import { getUsuaruiByID } from '../../../Backend/BD';

export default function TransaccionPlantilla ({transaccion}) {
    let usuario = getUsuaruiByID(transaccion.usuarioID);

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
                sx={{ marginLeft: '1em', flex: 1 }}
            >
                {transaccion.descripcion}
            </Typography>
            <Typography variant='subtitle1' 
                sx={{ marginLeft: '1em', flex: 1 }}
            >
                {usuario.nombre}
            </Typography>
            <Typography variant='subtitle2' 
                sx={{ marginLeft: '1em', flex: 1 }}
            >
                {transaccion.fecha}
            </Typography>
            <Typography variant='h5' 
                sx={{ marginLeft: '1em', flex: 1,}}
            >
                {transaccion.monto}
            </Typography>
        </li>
    )
}