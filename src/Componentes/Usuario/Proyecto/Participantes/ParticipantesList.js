// ParticipantesList.js
import React, { useState } from 'react';
import Participantes from './Participantes';
import imagen4 from '../../../../imagenes/agregarUsuario.png';
import FormularioAgregarParticipante from './FormularioAgregarParticipante';

const ParticipantesList = ({proyecto, actualizarApp}) => {
    let usuarios = proyecto.usuarios;
    const [estadoFormulario, setEstadoFormulario] = useState(false);
    const abrirFormulario = () => {
        setEstadoFormulario(true);
    }
    const cerrarFormulario = () => {
        setEstadoFormulario(false);
    }
    return (
        <article>
            {usuarios.map(usuario => (
                <Participantes 
                    proyecto = {proyecto}
                    usuario = {usuario}
                />
            ))}
            <button className="boton-agregar" onClick={abrirFormulario}>
                <img src={imagen4} className="imagen-agregar" alt="Descripción de la imagen"  />
            </button>

            {estadoFormulario && <FormularioAgregarParticipante proyecto={proyecto} cerrarFormulario={cerrarFormulario} actualizarApp={actualizarApp}/>}
        </article>
    );
};

export default ParticipantesList;
