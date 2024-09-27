import React from 'react';
import './style.css';
import { Grid, Box, Typography } from '@mui/material';
import image1 from './../../imagenes/nosotros1.jpeg';
import image2 from './../../imagenes/super.jpg';
import image3 from './../../imagenes/nosotros2.jpg';
import image4 from './../../imagenes/nosotros3.jpg';

function Nosotros() {
    const images = [image1, image2, image3, image4];

    return (
        <article id='descrip' className="w-70">
            <h1 className='descrip'>Control total, perfectamente integrado</h1>
            <p className='grande'>
                <strong>
                    ¡Deja de preocuparte por las complejidades <br /> de dividir gastos con amigos,
                    familiares o compañeros de trabajo! <br />
                    Con SamuelMari, gestionar los gastos compartidos nunca ha sido tan fácil y eficiente.
                </strong>
            </p><br /><br /><br />
            
            <Box  sx={{ width: '80%', margin: '0 auto' }}>
                <Typography variant="h6" gutterBottom>
                </Typography>
                <Grid container spacing={2}>
                    {images.map((src, index) => (
                        <Grid item xs={6} md={3} key={index}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '250px', // Aumenta la altura
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#f9f9f9',
                                    overflow: 'hidden',
                                    borderRadius: '8px', // Mantiene un poco de redondez
                                }}
                            >
                                <img
                                    src={src}
                                    alt={`Imagen ${index + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <div className='desApp' >
            <h2 className='descrip2'>¿Qué es FinSnap?</h2>

            <p className='descrip3'>
                Es la solución definitiva para llevar un control preciso de los gastos en grupo. Ya sea que estés planeando un viaje,
                organizando un evento, o simplemente compartiendo gastos cotidianos, FinSnap te proporciona todas las herramientas
                que necesitas para una gestión financiera sin complicaciones.
            </p>
            </div>
        </article>
    );
}

export default Nosotros;
