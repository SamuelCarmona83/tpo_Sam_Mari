import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projecto (props) {
    let Contenido;
    const text = props.projecto;

    if (text != 'n'){
        Contenido = (
            <article className='projecto vh-n'>
                <h2>Estas en el {text}</h2>
            </article>
        );
    }else {
        Contenido = (
            <article className='projecto vh-n'>
                <h2>Bienvenidos, aqui va el projecto</h2>
            </article>
        );
    }

    return (
        Contenido
    );
}

export default Projecto;