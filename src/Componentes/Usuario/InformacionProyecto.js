import React from 'react';
import {Typography, Divider, Button, Box} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function InfoProyecto (){
    return (
            <article id='infoProyecto'>
                <div className='descripcion d-flex f-row justify-content-between'>
                    <Typography variant="subtitle1" gutterBottom sx={{maxWidth:'75%' , padding:'15px'}}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit netus mauris 
                        fermentum volutpat urna, lectus non nunc nostra mi fusce maecenas donec 
                        facilisis congue sed, malesuada fringilla lobortis parturient egestas cubilia 
                        vestibulum sapien in felis sociis.
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
                            1000
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
                            100
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6">Total a Pagar</Typography>
                        <Typography variant="body1"
                            sx={{color:"red"}}
                        >
                            500
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6">balance</Typography>
                        <Typography variant="body1">400</Typography>
                    </Box>
                </Box>
                <Divider />
            </article>
        );
}
    