export async function deudasPagadasUsuarioPorProyecto(proyectoID, usuarioID) {
    const myHeaders = new Headers();
    myHeaders.append("jwt", sessionStorage.getItem("token"));

    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
    };

    const linkApi = "http://localhost:8080/api/deudas/deudasUsuarioPorProyecto/"+proyectoID+"/"+usuarioID;
    const resp = await fetch(linkApi, requestOptions);
    const dataJson = await resp.json();
    if (!Array.isArray(dataJson)) {
        console.error("dataJson no es un array. Verifica la estructura de la API:", dataJson);
        return [];
    }
    if (resp.status === 200){
        const deudasPagadas = [];
        for (const deuda of dataJson) {
            if (deuda.pagada === false) {
                deudasPagadas.push(deuda);
            }
        }
        return deudasPagadas;
    }else{
        alert("apiDeudas error dp "+dataJson.mensaje);
    }
}

export async function deudasImpagasUsuarioPorProyecto(proyectoID, usuarioID) {
    const myHeaders = new Headers();
    myHeaders.append("jwt", sessionStorage.getItem("token"));

    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
    };

    const linkApi = "http://localhost:8080/api/deudas/deudasUsuarioPorProyecto/"+proyectoID+"/"+usuarioID;
    const resp = await fetch(linkApi, requestOptions);
    const dataJson = await resp.json();
    if (!Array.isArray(dataJson)) {
        console.error("dataJson no es un array. Verifica la estructura de la API:", dataJson);
        return [];
    }
    if (resp.status === 200){
        const deudasImpagas = [];
        for (const deuda of dataJson) {
            if (deuda.pagada === false) {
                deudasImpagas.push(deuda);
            }
        }
        return deudasImpagas;
    }else{
        alert("apiDeudas error di "+dataJson.mensaje);
    }
}