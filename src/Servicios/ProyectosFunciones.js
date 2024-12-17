export function getProyectobyID(proyectos, proyectoID) {
    for(let proyecto of proyectos){
        if (proyecto.ID === proyectoID) {
            return proyecto;
        }
    }
    return null;
}

export function nombreDelUsuarioPorID(proyecto, usuarioID){
    for(let usuario of proyecto.usuarios){
        if(usuario.ID === usuarioID){
            return usuario.nombre;
        }
    }
}