import { Typography, Divider, ToggleButtonGroup, ToggleButton, Button} from '@mui/material';
import React from 'react';
import ListaDeTransacciones from './Componentes_Transacciones/ListaDeTransacciones';
import { agregarGasto, agregarPago, getProyectobyID } from '../../Backend/BD';
import FormularioTransaccion from './Componentes_Transacciones/FormularioTransaccion';

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

    let listaAMostrar, tipo;
    if (tipoTransaccion === 'Gastos') {
        listaAMostrar = proyecto.gastos;
        tipo = "gasto";
    }else {
        listaAMostrar = proyecto.pagos;
        tipo = "pago";
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
            actualizarLista(cantidad + 1);
        }else {
            agregarPago(data, proyectoID);
            actualizarLista(cantidad + 1);
        }
    }

    const [cantidad, setCantidad] = React.useState(listaAMostrar.length);

    const actualizarLista = (nuevaCantidad) => {
        setCantidad(nuevaCantidad);
    }

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
                <Typography variant='h4' >
                    {tipoTransaccion} = {sumarMontos()}
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
            <ListaDeTransacciones listaAMostrar={listaAMostrar} />
            <FormularioTransaccion visibilidad={visibilidad} cerrar={cerrarFormulario} crearT={crearTransaccion}/>
        </article>
    );
}