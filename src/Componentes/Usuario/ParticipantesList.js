// ParticipantesList.js
import React from 'react';
import Participantes from './Participantes';
import imagen4 from '../../imagenes/agregarUsuario.png';

const ParticipantesList = ({ proyectoID, participantes, proyectos }) => {
    const participantesDelProyecto = proyectos[proyectoID].participantes || [];

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
