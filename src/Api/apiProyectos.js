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

export async function crearProyecto(nombreProyecto) {
    const usuarioID = sessionStorage.getItem("usuarioID");
    const myHeaders = new Headers();
    myHeaders.append("jwt", sessionStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "nombre": nombreProyecto,
    "usuarioAdmin": usuarioID
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    const respuestaApi = await fetch("http://localhost:8080/api/proyectos/crearProyecto", requestOptions);
    const dataJson = await respuestaApi.json();
    alert(dataJson.mensaje);
}

export async function eliminarProyectoApi(proyectoID) {
    const myHeaders = new Headers();
    myHeaders.append("jwt", sessionStorage.getItem("token"));

    const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
    };
    const linkApi = "http://localhost:8080/api/proyectos/eliminarProyecto/" + proyectoID;
    const respuesta = await fetch(linkApi, requestOptions)
    const dataJson = await respuesta.json();
    alert(dataJson.mensaje);
}