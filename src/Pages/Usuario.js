import React from 'react';
import "../Componentes/Usuario/style.css";
import NavProj from '../Componentes/Usuario/NavProj';
import Projecto from '../Componentes/Usuario/Projecto';

function Usuario (){

    return (
        <article className='container-fluid artUsuario'>
            <NavProj />
            <Projecto />
        </article>
    );
    
}

export default Usuario;