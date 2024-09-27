import React from 'react';
import TransaccionPlantilla from './TransaccionPlantilla';

export default function ListaDeTransacciones ({listaAMostrar}) {

    return (
        <ul id='ListaDeTransacciones'>
            {listaAMostrar.map((transaccion) => (
                <TransaccionPlantilla transaccion={transaccion}/>
            ))}
        </ul>
    );
}