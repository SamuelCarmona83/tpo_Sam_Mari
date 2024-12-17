import React from 'react';
import GastoPlantilla from './GastoPlantilla';
import PagosPlantilla from './PagosPlantilla';

export default function ListaDeTransacciones ({listaAMostrar, borrar, tipoTransaccion, proyecto}) {
    let vista;
    if(tipoTransaccion === 'Gastos'){
        vista = listaAMostrar.map((gasto) => (
            <GastoPlantilla proyecto={proyecto} key={gasto.ID} gasto={gasto} borrar={borrar} />
        ))
    }else {
        vista = listaAMostrar.map((gasto) => (
            <PagosPlantilla proyecto={proyecto} key={gasto.ID} gasto={gasto} borrar={borrar} />
        ))
    }

    return (
        <ul id='ListaDeTransacciones'>
            {vista}
        </ul>
    );
}