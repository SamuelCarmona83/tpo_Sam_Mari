import { json } from "react-router-dom";

export function SumaDeGastosPorUsuario(proyecto, usuarioID) {
    if(proyecto.gastos.length === 0 ){
        return 0;
    }
    let totalDeGastos = 0;
    for(let gasto of proyecto.gastos){
        if(gasto.usuarioID === usuarioID){
            totalDeGastos += parseFloat(gasto.monto);
        }
    }
    return totalDeGastos;
}

export function gastosTotalesDelProyecto(proyecto) {
    if(proyecto.gastos.length === 0 ){
        return 0;
    }
    let totalDeGastos = 0;
    for(let gasto of proyecto.gastos){
        totalDeGastos += parseFloat(gasto.monto);
    }
    return totalDeGastos;
}

export function listarParticipantesParaElFormularioGasto(proyecto, usuarioID) {
    let usuarios = [];
    if(proyecto.usuarios){
        usuarios = proyecto.usuarios;
    }
    if (usuarios.length < 2){
        return [];
    }

    const porcentaje = 1 / usuarios.length;

    let usuariosAdaptados = [];
    usuarios.map(usuario => {
        const usuarioAdaptado = JSON.stringify({
            "ID" : usuario.ID,
            "nombre" : usuario.nombre,
            "porcentaje" : porcentaje
        });
        usuariosAdaptados.push(usuarioAdaptado);
    });

    return usuariosAdaptados;
}