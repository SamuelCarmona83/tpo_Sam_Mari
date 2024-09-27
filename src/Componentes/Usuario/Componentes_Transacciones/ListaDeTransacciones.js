import React from 'react';
import TransaccionPlantilla from './TransaccionPlantilla';

export default function ListaDeTransacciones ({listaAMostrar, borrar}) {

    return (
        <ul id='ListaDeTransacciones'>
            {listaAMostrar.map((transaccion) => (
                <TransaccionPlantilla key={transaccion.ID} transaccion={transaccion} borrar={borrar} />
            ))}
        </ul>
    );
}