import toast from "react-hot-toast";

export async function gastosUsuarioPorProyecto(proyectoID, usuarioID){
    const myHeaders = new Headers();
    myHeaders.append("jwt", sessionStorage.getItem("token"));

    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
    };
    
    const linkApi = process.env.REACT_APP_BACKEND_URL + "/api/gastos/obtenerGastosUsuario/"+proyectoID+"/"+usuarioID;
    const resp = await fetch(linkApi, requestOptions);
    const dataJson = resp.json();

    if (resp.status === 200){
        toast.success("Gastos obtenidos correctamente");
        return dataJson;
    }else{
        toast.error("Error al obtener los gastos");
        console.error("Error al obtener los gastos: ", dataJson.mensaje);
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

    let respuestApi = await fetch(process.env.REACT_APP_BACKEND_URL +"/api/gastos/crearGasto", requestOptions)
    let dataJson = respuestApi.json();

    if (respuestApi.status === 200){
        toast.success("Gasto creado correctamente");
        return dataJson;
    }else{
        toast.error("Error al crear el gasto");
        console.error("Error al crear el gasto: ", dataJson.mensaje);
    }
}