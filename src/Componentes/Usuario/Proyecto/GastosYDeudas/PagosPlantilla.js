import { Typography , Button} from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { nombreDelUsuarioPorID } from '../../../../Servicios/ProyectosFunciones';
export default function GastoPlantilla ({pago, borrar, proyecto}) {

    const botonBorrar = () => {
        const confirmDelete = window.confirm(`¿Quieres borrar "${pago.descripcion}"?`);
        if (confirmDelete) {
            borrar(pago.ID);
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
                    <img src={pago.imagen} alt='ticket de compra'/>
                </figure>
            </Button>
            <Typography variant='subtitle1' 
                sx={{flex: 1 }}
            >
                Deudor: {nombreDelUsuarioPorID(proyecto, pago.deudorId)}
            </Typography>
            <Typography variant='subtitle1' 
                sx={{flex: 1 }}
            >
                Acreedor: {nombreDelUsuarioPorID(proyecto, pago.cobradorId)}
            </Typography>
            <Typography variant='subtitle2' 
                sx={{flex: 1 }}
            >
                {pago.createdAt.slice(0, 10)}
            </Typography>
            <Typography variant='h5' 
                sx={{ flex: 1,}}
            >
                {pago.monto}
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