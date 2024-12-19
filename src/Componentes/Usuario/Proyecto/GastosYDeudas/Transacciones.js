import { Typography, Divider, ToggleButtonGroup, ToggleButton, Button} from '@mui/material';
import React from 'react';
import ListaDeTransacciones from './ListaDeTransacciones';
import { gastosTotalesDelProyecto } from '../../../../Servicios/GastosFunciones';
import { listaDeudasPagadas, totalDeudasPagadas, totalImpagoDelProyecto } from '../../../../Servicios/DeudasFunciones';
import FormularioParaGasto from './FormularioParaGasto';
import FormularioParaPagarDeudas from './FormularioParaPagarDeudas';

export default function Transacciones({proyecto, actualizarApp}){
    //      Toda la logica para manejo del tipo de transaccion      //
    const [tipoTransaccion, setTipoTransaccion] = React.useState('Gastos');
    const cambiarTipo = (event, newTipo) => {
        if (newTipo !== 'Gastos' && newTipo !== 'Pagos'){
            newTipo = tipoTransaccion;
        }
        setTipoTransaccion(newTipo);
    }

    let listaAMostrar = [];
    let tipo = '';
    let total = 0;
    if (tipoTransaccion === 'Gastos') {
        listaAMostrar = proyecto.gastos;
        total = gastosTotalesDelProyecto(proyecto);
        tipo = 'gasto';
    } else {
        listaAMostrar = listaDeudasPagadas(proyecto.deudas);
        total = totalDeudasPagadas(proyecto);
        tipo = 'pago';
    }

    //      Variable de estado y funciones para el formulario       //
    const [visibilidad, setVisibilidad] = React.useState(false);
    const abrirFormulario = () => {
        setVisibilidad(true);
    }
    const cerrarFormulario = () => {
        setVisibilidad(false);
    }

    const borrarTransaccion = (transaccionID) => {
        console.log(listaAMostrar);
        console.log(transaccionID);
        if(tipoTransaccion === 'Gastos'){
            //borrarGasto(transaccionID, proyectoID);
        }else {
            //borrarPago(transaccionID, proyectoID);
        }
        setCantidad(cantidad - 1);
        console.log(listaAMostrar);
    }

    const [cantidad, setCantidad] = React.useState(listaAMostrar.length);

    return (
        <article>
            <nav id='tituloTransacciones' className='d-flex f-row justify-content-between'>
                <Typography variant='h4' 
                    sx={{
                        color: tipoTransaccion ==='Gastos'? 'red' : 'green'
                    }}
                >
                    {tipoTransaccion} ${total}
                </Typography>

                <ToggleButtonGroup
                    color="primary"
                    value={tipoTransaccion} 
                    exclusive
                    onChange={cambiarTipo}
                    aria-label="Plataforma"
                    sx={{height:'40px'}}
                >
                    <ToggleButton value="Gastos">Gastos</ToggleButton>
                    <ToggleButton value="Pagos" >Pagos</ToggleButton>
                </ToggleButtonGroup>

                <Button variant='outlined' onClick={abrirFormulario}>
                    Nuevo {tipo}
                </Button>
            </nav>
            <Divider />
            <ListaDeTransacciones proyecto={proyecto} listaAMostrar={listaAMostrar} borrar={borrarTransaccion} tipoTransaccion={tipoTransaccion}/>
            {tipoTransaccion === 'Gastos' ?  <FormularioParaGasto visibilidad={visibilidad} cerrar={cerrarFormulario} proyecto={proyecto} actualizarApp={actualizarApp} usuarios={proyecto.usuarios}/> : 
                                            <FormularioParaPagarDeudas visibilidad={visibilidad} cerrar={cerrarFormulario} proyecto={proyecto} actualizarApp={actualizarApp} />
            }
        </article>
    );
}