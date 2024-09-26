// ParticipantesList.js
import React from 'react';
import Participantes from './Participantes';
import imagen4 from '../../imagenes/agregarUsuario.png';
import { getProyectobyID, getUsuarios } from '../../Backend/BD';

const ParticipantesList = ({proyectoID}) => {
    let proyecto = getProyectobyID(proyectoID);
    let participantes = getUsuarios();
    const participantesDelProyecto = proyecto.participantes || [];

    return (
        <article>
            {participantesDelProyecto.map(index => (
                <Participantes 
                    key={participantes[index].ID} // Asegúrate de añadir una clave única
                    imagen={participantes[index].imagen} 
                    nombre={participantes[index].nombre} 
                    ID={participantes[index].ID} 
                    collap="#collapseOne" 
                    monto={participantes[index].monto} 
                />
            ))}
            <button className="boton-agregar">
                <img src={imagen4} className="imagen-agregar" alt="Descripción de la imagen" />
            </button>
        </article>
    );
};

export default ParticipantesList;
