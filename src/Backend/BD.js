import ImagenMari from "../imagenes/mari.jpeg";
import imagenSamu from "../imagenes/samu.jpeg";
import imagenCorazon from "../imagenes/corazon.png";

let proyectos = [{
    nombre: "Gastos de la fiesta",
    ID: 0,
    participantes: [0, 1, 3],
    gastos:[
        {
            imagen: 'https://img.freepik.com/vector-gratis/muestra-ticket-realista_23-2147938550.jpg',
            descripcion: 'Torta de chocolate',
            monto: 3000,
            usuarioID: 0,
            fecha: "20/09/24"
        },{
            imagen: 'https://img.freepik.com/vector-gratis/muestra-ticket-realista_23-2147938550.jpg',
            descripcion: 'Bebidas',
            monto: 5000,
            usuarioID: 1,
            fecha: "21/09/24"
        }
    ],
    pagos: [
        {
            imagen: 'https://img.freepik.com/vector-gratis/muestra-ticket-realista_23-2147938550.jpg',
            descripcion: 'Pago a Samuel',
            monto: 500,
            usuarioID: 0,
            fecha: "21/09/24"
        }
    ]
    
    
}, {
    nombre: "Viaje a la costa",
    ID: 1,
    participantes: [0, 1, 3],
    gastos:[
        {
            imagen: 'https://img.freepik.com/vector-gratis/muestra-ticket-realista_23-2147938550.jpg',
            descripcion: 'Pasaje',
            monto: 25300,
            usuarioID: 0,
            fecha: "16/08/24"
        }
    ],
    pagos: []
}];

let usuarios = [
    {
        ID:0,
        nombre:"mariangel",
        imagen: ImagenMari,
        monto:"300",
    },
    {
        ID: 1,
        nombre:"Samuel",
        imagen: imagenSamu,
        monto:"500"
    },
    {
        ID: 2,
        nombre:"Jose Alejandro",
        imagen:"",
        monto:"200"
    },
    {
        ID: 3,
        nombre:"Eddymar Orellana",
        imagen: imagenCorazon,
        monto:"100"
    }
];
//      Metodos de Proyecto     //
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

//      Metodos de gastos y pagos       //
export function agregarGasto(datos, proyectoID) {
    for (let i = 0; i < proyectos.length ; i++){
        if(proyectos[i].ID === proyectoID){
            proyectos[i].gastos.push(datos)
            console.log(proyectos[i].gastos);
        }
    }
}

export function agregarPago(datos, proyectoID) {
    for (let i = 0; i < proyectos.length ; i++){
        if(proyectos[i].ID === proyectoID){
            proyectos[i].pagos.push(datos)
        }
    }
}

//      Metodos de Usuario      //
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

export function getUsuaruiByID(ID){
    for (let i=0; i<usuarios.length; i++) {
        if(ID === usuarios[i].ID){
            return usuarios[i]
        }
    }
}