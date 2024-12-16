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