import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import {AccordionSummary, AccordionDetails, Typography, Button} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteIcon from '@mui/icons-material/Delete';
import { SumaDeGastosPorUsuario } from '../../../Servicios/GastosFunciones';
import { totalAdeudadoPorUsuario, totalPorCobrarPorUsuario } from '../../../Servicios/DeudasFunciones';

export default function Participantes({proyecto, usuario}) {
  let ingresosPendientes = totalPorCobrarPorUsuario(proyecto, usuario.ID);

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header" className='itemsAccodion'
        >
          <div id="datosParticipante">
            <img src={usuario.imagen} alt={usuario.nombre} className="participante-imagen"/>
            <Typography id="nombre-participante" variant='h6'>
              {usuario.nombre}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ul className="detalle-totales" >
              <li>
                <Typography variant='subtitle1'>
                  Gastos Reportados
                </Typography>
                
                <Typography variant='p'sx={{color:"green"}}>
                  {SumaDeGastosPorUsuario(proyecto,usuario.ID)}
                </Typography>
              </li>
              <li>
                <Typography variant='subtitle1'>
                  Total Deudas
                </Typography>
                
                <Typography variant='p'
                  sx={{color:"red"}}
                >
                  {totalAdeudadoPorUsuario(proyecto, usuario.ID)}
                </Typography>
              </li>
              <li>
                <Typography variant='subtitle1'>
                  Ingresos pendientes
                </Typography>
                <Typography variant='p'
                  sx={{
                    color: ingresosPendientes > 0 ? 'green' : 'black'
                  }}
                >
                  {ingresosPendientes}
                </Typography>
              </li>
              <li>
                <Button 
                    variant='text'
                    sx={{
                    color: 'grey',
                    width:'42px'}}
                >
                    <DeleteIcon />
                </Button>
              </li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
