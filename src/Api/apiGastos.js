export async function gastosUsuarioPorProyecto(proyectoID, usuarioID){
    const myHeaders = new Headers();
    myHeaders.append("jwt", sessionStorage.getItem("token"));

    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
    };
    
    const linkApi = "http://localhost:8080/api/gastos/obtenerGastosUsuario/"+proyectoID+"/"+usuarioID;
    const resp = await fetch(linkApi, requestOptions);
    const dataJson = resp.json();

    if (resp.status === 200){
        return dataJson;
    }else{
        alert("apiGastos gu "+dataJson.mensaje);
    }

}

export async function crearGasto(monto, imagen, descripcion, proyectoID, participantes) {
    let usuarioID = Number(sessionStorage.getItem("usuarioID"));
    let participanteFiltrados = participantes.filter(participante => participante.ID !== usuarioID);
    
    const myHeaders = new Headers();
    myHeaders.append("jwt", sessionStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "monto": monto,
        "imagen": imagen,
        "descripcion": descripcion,
        "usuarioID": usuarioID,
        "proyectoID": proyectoID,
        "participantes": participanteFiltrados
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    let respuestApi = await fetch("http://localhost:8080/api/gastos/crearGasto", requestOptions)
    let dataJson = respuestApi.json();
}