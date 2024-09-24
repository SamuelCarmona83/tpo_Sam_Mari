import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './style.css';
import peso from '../../imagenes/peso.png';

export default function Participantes(props) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header" className='itemsAccodion'> <div id="datosParticipante"> <img src={props.imagen} alt={props.nombre} className="participante-imagen"/> <p id="nombre-participante">{props.nombre}</p> </div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <ul className="detalle-totales" >
              
              <li><p>Total de los Gastos</p><img className="icono-peso" src={peso}></img></li>
              <li><p>Aporte</p><img className="icono-peso" src={peso}></img></li>
              <li><p>Saldo a cobrar</p><img className="icono-peso" src={peso}></img></li>
              <li><p>Saldo a pagar</p><img className="icono-peso" src={peso}></img></li>
              
            </ul>
          </div>
        
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
