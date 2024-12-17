export async function getProyectos() {
    const myHeaders = new Headers();
    myHeaders.append("jwt", sessionStorage.getItem("token"));

    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
    };

    const respuestaApi = await fetch("http://localhost:8080/api/proyectos/proyectosUsuario/" + sessionStorage.getItem("usuarioID"), requestOptions);
    const dataJson = await respuestaApi.json();
    return dataJson;
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

    const respuestaApi = await fetch("http://localhost:8080/api/proyectos/eliminarProyecto/" + proyectoID, requestOptions);
    const dataJson = await respuestaApi.json();
    alert(dataJson.mensaje);
}

export async function getProyectobyID(proyectoID){
    const myHeaders = new Headers();
    myHeaders.append("jwt", sessionStorage.getItem("token"));
    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
    };
    const linkApi = "http://localhost:8080/api/proyectos/getProyecto/"+proyectoID;
    const respuestaApi = await fetch(linkApi, requestOptions);
    const dataJson = await respuestaApi.json();
    return dataJson;
}

export async function agregarParticipante(usuarioID, proyectoID) {
    const myHeaders = new Headers();
    myHeaders.append("jwt", sessionStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      "usuarioId": usuarioID
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
  
    const respuestaApi = await fetch("http://localhost:8080/api/proyectos/agregarParticipante/"+proyectoID, requestOptions);
    if(respuestaApi.status === 200){
        const dataJson = await respuestaApi.json();
        return dataJson;
      }else{
        alert(respuestaApi.json.mensaje);
      }
}