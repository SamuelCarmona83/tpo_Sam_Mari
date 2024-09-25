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
        imagen:'../../imagenes/mari.jpeg',
        monto:"300",
    },
    {
        ID:"002",
        nombre:"Samuel",
        imagen:'../../imagenes/samu.jpeg',
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