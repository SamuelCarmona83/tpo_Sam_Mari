import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import {AccordionSummary, AccordionDetails, Typography, Button} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteIcon from '@mui/icons-material/Delete';
import { getProyectobyID, getUsuaruiByID } from '../../../Backend/BD';

export default function Participantes(props) {
  const calcularAbonado = props.calcularAbonado;
  let usuario = getUsuaruiByID(props.ID);
  let proyecto = getProyectobyID(props.proyectoID);
  let gastos = proyecto.gastos;
  let pagos = proyecto.pagos;
  let abonado = calcularAbonado(props.ID);

  let totalGastos = 0;
  for (let i=0; i<gastos.length; i++) {
    totalGastos += gastos[i].monto;
  }

  let parteAPagar = totalGastos;
  if (proyecto.participantes.length > 0) {
    parteAPagar = totalGastos / proyecto.participantes.length;
  }

  let balance = abonado - parteAPagar;


  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header" className='itemsAccodion'
        >
          <div id="datosParticipante">
            <img src={props.imagen} alt={props.nombre} className="participante-imagen"/>
            <Typography id="nombre-participante" variant='h6'>
              {props.nombre}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ul className="detalle-totales" >
              <li>
                <Typography variant='subtitle1'>
                  Abonado
                </Typography>
                
                <Typography variant='p'
                  sx={{color:"green"}}
                >
                  {abonado.toFixed(2)}
                </Typography>
              </li>
              <li>
                <Typography variant='subtitle1'>
                  Monto a pagar
                </Typography>
                
                <Typography variant='p'
                  sx={{color:"red"}}
                >
                  {parteAPagar.toFixed(2)}
                </Typography>
              </li>
              <li>
                <Typography variant='subtitle1'>
                  Balance
                </Typography>
                
                <Typography variant='p'
                  sx={{
                    color: balance >= 0 ? 'green' : 'red'
                  }}
                >
                  {balance.toFixed(2)}
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
