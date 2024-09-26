let proyectos = [{
    nombre: "proyecto pepito",
    ID: 0,
    participantes: [0, 1, 3,0]
}, {
    nombre: "proyecto 2",
    ID: 1,
    participantes: [0, 1, 3]
}, {
    nombre: "proyecto 3",
    ID: 2,
    participantes: [0, 1]
}];

let usuarios = [
    {
        ID:"001",
        nombre:"mariangel",
        imagen:"../../imagenes/mari.jpeg",
        monto:"300",
    },
    {
        ID:"002",
        nombre:"Samuel",
        imagen:"../../imagenes/samu.jpegs",
        monto:"500"
    },
    {
        ID:"003",
        nombre:"Jose Alejandro",
        imagen:"",
        monto:"200"
    },
    {
        ID:"004",
        nombre:"Eddymar Orellana",
        imagen:'../../imagenes/corazon.png',
        monto:"100"
    }
];

export function getProyectos(){
    return proyectos;
}

export function getProyectobyID(ID){
    for (let i = 0; i < proyectos.length ; i++){
        if(proyectos[i].ID === ID){
            return proyectos[i];
        }
    }
}

export function sacarProyecto(ID){
    for (let i = 0; i < proyectos.length ; i++){
        if(proyectos[i].ID === ID){
            proyectos.splice(i , 1);
        }
    }
}

export function agregarProyecto(nombreNuevoProyecto){
    let IDNuevo = proyectos[proyectos.length - 1].ID + 1;
    proyectos.push({
        nombre: nombreNuevoProyecto,
        ID: IDNuevo,
        participantes: []
    });
}

export function getUsuarios(){
    return usuarios
}

export function getParticipantes(indicesUsuarios){
    let v =[]; 
    for (let i = 0; i < indicesUsuarios.length; i++){
        v.push(usuarios[indicesUsuarios[i]]);
    }
    return v;
}

export function agregarParticipante (proyectoID, participanteID) {
    if(proyectoID >= 0 && proyectoID < proyectos.length){
        let participantes = proyectos[proyectoID].participantes

        if (!participantes.includes(participanteID)){
            participantes.push(participanteID)
        }
    }
}

export function agregarUsuario (UsuarioJason) {
    usuarios.push(UsuarioJason);
}

let UsuarioLogeado = "";

export function setUsuarioLogeado(newUsuario) {
    console.log("Seteando" + newUsuario)
    UsuarioLogeado = newUsuario;
}

export function getUsuarioLogeado() {
    return UsuarioLogeado;
}