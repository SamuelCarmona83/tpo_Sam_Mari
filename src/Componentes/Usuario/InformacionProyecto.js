import React from 'react';
import { Card, CardContent, Typography, Divider } from '@mui/material';

export default function InfoProyecto (){
    return (<Card sx={{ maxWidth: 500, margin: '20px auto', padding: '20px' }}>
                <CardContent>
                    {/* Descripción del Proyecto */}
                    <Typography variant="h5" gutterBottom>
                        Descripción del proyecto
                    </Typography>

                    <Divider />

                    {/* Monto total abonado */}
                    <Typography variant="subtitle1" gutterBottom sx={{ marginTop: '10px' }}>
                        Monto Total Abonado: "1000"
                    </Typography>

                    <Divider />

                    {/* Datos del Usuario Logueado */}
                    <Typography variant="h6" gutterBottom sx={{ marginTop: '10px' }}>
                        Detalles de tu cuenta:
                    </Typography>
                    <Typography variant="body1">
                        Balance: 100
                    </Typography>
                    <Typography variant="body1">
                        Ingresos: 50
                    </Typography>
                    <Typography variant="body1" color={'primary'}>
                        Monto a Pagar: 150
                    </Typography>
                </CardContent>
            </Card>
        );
}
    