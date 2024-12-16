// ParticipantesList.js
import React from 'react';
import Participantes from './Participantes';
import imagen4 from '../../../imagenes/agregarUsuario.png';



const ParticipantesList = ({proyecto, abrir}) => {
    let usuarios = proyecto.usuarios;

    return (
        <article>
            {usuarios.map(usuario => (
                <Participantes 
                    proyecto = {proyecto}
                    usuario = {usuario}
                />
            ))}
            <button className="boton-agregar" onClick={abrir}>
                <img src={imagen4} className="imagen-agregar" alt="Descripción de la imagen"  />
            </button>
        </article>
    );
};

export default ParticipantesList;
