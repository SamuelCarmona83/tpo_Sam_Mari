export async function getProyectos() {
    const linkApi = 'http://localhost:8080/api/proyectos/proyectosUsuario/' + sessionStorage.getItem("usuarioID");

    const respuesta = await fetch(linkApi, {
            method: 'GET',
            headers: {
                "jwt": sessionStorage.getItem("token"),
            },
    });
    
    return respuesta;
}