import React from 'react';
import FormularioInicio from '../Componentes/IniciarSesion/FormularioIniciar';
import FormularioRegistro from '../Componentes/IniciarSesion/FormularioRegistro';
import '../Componentes/IniciarSesion/style.css';

function IniciarSesion (props) {
    let Formulario;
    if(props.pag == "iniciar"){
        Formulario = FormularioInicio;
    }else{
        Formulario = FormularioRegistro;
    }
    return (
        <section className='acceso'>
            <Formulario />
        </section>
    );
}

export default IniciarSesion;