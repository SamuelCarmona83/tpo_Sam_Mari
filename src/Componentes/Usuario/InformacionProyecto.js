import React from 'react';
import {Typography, Divider, Button, Box} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { getProyectobyID } from '../../Backend/BD';

export default function InfoProyecto ({proyectoID, calcularAbonado}){
    let proyecto = getProyectobyID(proyectoID);
    let gastos = proyecto.gastos;
    let totalGastos = 0;
    let abonadoPorUsuario = calcularAbonado(0); 

    for (let i=0; i<gastos.length; i++) {
        totalGastos += gastos[i].monto;
    }

    let parteAPagar = totalGastos;
    if (proyecto.participantes.length > 0) {
        parteAPagar = totalGastos / proyecto.participantes.length;
    }

    let balance = abonadoPorUsuario - parteAPagar;
    
    return (
            <article id='infoProyecto'>
                <div className='descripcion d-flex f-row justify-content-between'>
                    <Typography variant="subtitle1" gutterBottom sx={{maxWidth:'75%' , padding:'15px'}}>
                        {proyecto.descripcion}
                    </Typography>
                    <Button 
                        variant='text'
                        sx={{
                            height: "25px",
                            color: 'grey',
                            marginTop: '15px'
                        }}
                    > 
                        <EditIcon />
                    </Button>
                    <div className='gastoTotal'>
                        <Typography variant="h6" gutterBottom sx={{ marginTop: '10px' }}>
                            Gasto Total
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle1" gutterBottom 
                            sx={{ marginTop: '10px' ,
                                color: 'red' 
                            }}
                        >
                            {totalGastos}
                        </Typography>
                    </div>
                </div>
                <Divider />
                <Typography variant='h5' 
                    sx={{ margin: '15px' }}
                >
                    Balance Personal
                </Typography>
                <Box sx={{ display: 'flex', marginBottom: '15px'}}>
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6">Abonado</Typography>
                        <Typography variant="body1"
                            sx={{color:"green"}}
                        >
                            {abonadoPorUsuario.toFixed(2)}
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6">Tu parte a pagar</Typography>
                        <Typography variant="body1"
                            sx={{color:"red"}}
                        >
                            {parteAPagar.toFixed(2)}
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6">balance</Typography>
                        <Typography variant="body1"
                            sx={{
                                color: balance >= 0 ? 'green' : 'red'
                            }}
                        >{balance.toFixed(2)}</Typography>
                    </Box>
                </Box>
                <Divider />
            </article>
        );
}
    