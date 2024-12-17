export function totalAdeudadoPorUsuario(proyecto, usuarioID) {
    if(proyecto.deudas.length === 0 ){
        return 0;
    }
    let totalDeDeudas = 0;
    for(let deuda of proyecto.deudas){
        if(deuda.deudorId === usuarioID){
            totalDeDeudas += parseFloat(deuda.monto);
        }
    }
    return totalDeDeudas;
}

export function totalPorCobrarPorUsuario(proyecto, usuarioID) {
    if(proyecto.deudas.length === 0 ){
        return 0;
    }
    let totalACobrar = 0;
    for(let deuda of proyecto.deudas){
        if(deuda.cobradorId === usuarioID){
            if(deuda.pagada === false){
                totalACobrar += parseFloat(deuda.monto);
            }
        }
    }
    return totalACobrar;
}

export function totalImpagoDelProyecto(proyecto) {
    if(proyecto.deudas.length === 0 ){
        return 0;
    }
    let total = 0;
    for(let deuda of proyecto.deudas){
        if(deuda.pagada === false){
            total += parseFloat(deuda.monto)
        }
    }
    return total;
}

export function totalDeudasPagadas(proyecto) {
    if(proyecto.deudas.length === 0 ){
        return 0;
    }
    let total = 0;
    for(let deuda of proyecto.deudas){
        if(deuda.pagada === true){
            total += parseFloat(deuda.monto)
        }
    }
    return total;
}

export function listaDeudasPagadas(deudas){
    if(deudas.length === 0){
        return [];
    }
    let deudasPagas = [];
    for(let deuda of deudas){
        if (deuda.pagada === true){
            deudasPagas.push(deuda);
        }
    }
    return deudasPagas;
}