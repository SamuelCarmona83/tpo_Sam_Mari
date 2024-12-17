import { Typography , Button} from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { nombreDelUsuarioPorID } from '../../../../Servicios/ProyectosFunciones';
export default function GastoPlantilla ({Pago, borrar, proyecto}) {

    const botonBorrar = () => {
        const confirmDelete = window.confirm(`¿Quieres borrar "${Pago.descripcion}"?`);
        if (confirmDelete) {
            borrar(Pago.ID);
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
                    <img src={Pago.imagen} alt='ticket de compra'/>
                </figure>
            </Button>
            <Typography variant='subtitle1' 
                sx={{flex: 1 }}
            >
                Deudor: {nombreDelUsuarioPorID(proyecto, Pago.deudorId)}
            </Typography>
            <Typography variant='subtitle1' 
                sx={{flex: 1 }}
            >
                Acreedor: {nombreDelUsuarioPorID(proyecto, Pago.cobradorId)}
            </Typography>
            <Typography variant='subtitle2' 
                sx={{flex: 1 }}
            >
                {Pago.createdAt.slice(0, 10)}
            </Typography>
            <Typography variant='h5' 
                sx={{ flex: 1,}}
            >
                {Pago.monto}
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