export function getProyectobyID(proyectos, proyectoID) {
    for(let proyecto of proyectos){
        if (proyecto.ID === proyectoID) {
            return proyecto;
        }
    }
    return null;
}

