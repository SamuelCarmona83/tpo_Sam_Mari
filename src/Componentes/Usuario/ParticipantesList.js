// ParticipantesList.js
import React from 'react';
import Participantes from './Participantes';
import { getProyectobyID, getUsuarios } from '../../Backend/BD';
import imagen4 from '../../imagenes/agregarUsuario.png';



const ParticipantesList = ({proyectoID,abrir}) => {
    let proyecto = getProyectobyID(proyectoID);
    let participantes = getUsuarios();
    const participantesDelProyecto = proyecto.participantes || [];

    return (
        <article>
            {participantesDelProyecto.map(index => (
                <Participantes 
                  
                    imagen={participantes[index].imagen} 
                    nombre={participantes[index].nombre} 
                    ID={participantes[index].ID} 
                    collap="#collapseOne" 
                    monto={participantes[index].monto} 
                />
            ))}
            <button className="boton-agregar" onClick={abrir}>
                <img src={imagen4} className="imagen-agregar" alt="Descripción de la imagen"  />
            </button>
        </article>
    );
};

export default ParticipantesList;
