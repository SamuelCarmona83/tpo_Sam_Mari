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