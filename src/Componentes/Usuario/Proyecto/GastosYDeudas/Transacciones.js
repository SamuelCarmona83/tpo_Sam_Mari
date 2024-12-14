import { Typography, Divider, ToggleButtonGroup, ToggleButton, Button} from '@mui/material';
import React from 'react';
import ListaDeTransacciones from './ListaDeTransacciones';
import { agregarGasto, agregarPago, borrarGasto, borrarPago, getProyectobyID } from '../../../../Backend/BD';
import FormularioTransaccion from './FormularioTransaccion';

export default function Transacciones({proyectoID}){
    let proyecto = getProyectobyID(proyectoID);

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
    if (tipoTransaccion === 'Gastos') {
        listaAMostrar = proyecto.gastos || [];  
        tipo = 'gasto';
    } else {
        listaAMostrar = proyecto.pagos || [];
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
    const crearTransaccion = (data) => {
        if(tipoTransaccion === 'Gastos'){
            agregarGasto(data, proyectoID);
        }else {
            agregarPago(data, proyectoID);
        }
        setCantidad(cantidad + 1);
    }

    const borrarTransaccion = (transaccionID) => {
        console.log(listaAMostrar);
        console.log(transaccionID);
        if(tipoTransaccion === 'Gastos'){
            borrarGasto(transaccionID, proyectoID);
        }else {
            borrarPago(transaccionID, proyectoID);
        }
        setCantidad(cantidad - 1);
        console.log(listaAMostrar);
    }

    const [cantidad, setCantidad] = React.useState(listaAMostrar.length);

    const sumarMontos = () => {
        let total = 0;
        for (let i = 0;  i < listaAMostrar.length; i++) {
            total += listaAMostrar[i].monto;
        }
        return String(total);
    }

    return (
        <article>
            <nav id='tituloTransacciones' className='d-flex f-row justify-content-between'>
                <Typography variant='h4' 
                    sx={{
                        color: tipoTransaccion ==='Gastos'? 'red' : 'green'
                    }}
                >
                    {tipoTransaccion}  ${sumarMontos()}
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
            <ListaDeTransacciones listaAMostrar={listaAMostrar} borrar={borrarTransaccion} />
            <FormularioTransaccion visibilidad={visibilidad} cerrar={cerrarFormulario} crearT={crearTransaccion}/>
        </article>
    );
}