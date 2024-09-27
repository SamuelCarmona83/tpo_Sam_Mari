import ImagenMari from "../imagenes/mari.jpeg";
import imagenSamu from "../imagenes/samu.jpeg";
import imagenCorazon from "../imagenes/corazon.png";

let proyectos = [{
    nombre: "Fiesta de cumpleaños",
    descripcion: "Todos los gastos para la fiesta del fin de semana",
    ID: 0,
    participantes: [0, 1, 3],
    gastos:[
        {
            ID: 0,
            imagen: 'https://img.freepik.com/vector-gratis/muestra-ticket-realista_23-2147938550.jpg',
            descripcion: 'Torta de chocolate',
            monto: 3000,
            usuarioID: 0,
            fecha: "20/09/24"
        },{
            ID: 1,
            imagen: 'https://img.freepik.com/vector-gratis/muestra-ticket-realista_23-2147938550.jpg',
            descripcion: 'Bebidas',
            monto: 5000,
            usuarioID: 1,
            fecha: "21/09/24"
        }
    ],
    pagos: [
        {
            ID: 0,
            imagen: 'https://img.freepik.com/vector-gratis/muestra-ticket-realista_23-2147938550.jpg',
            descripcion: 'Pago a Samuel',
            monto: 500,
            usuarioID: 0,
            fecha: "21/09/24"
        }
    ]
    
    
}, {
    nombre: "Viaje a la costa",
    descripcion: "Llevamos la cuenta de todos los gastos del viaje a la costa",
    ID: 1,
    participantes: [0, 1],
    gastos:[
        {
            ID: 0,
            imagen: 'https://img.freepik.com/vector-gratis/muestra-ticket-realista_23-2147938550.jpg',
            descripcion: 'hotel',
            monto: 30000,
            usuarioID: 1,
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
        participantes: [],
        gastos: [], 
        pagos: []
    });
}

//      Metodos de gastos y pagos       //
export function agregarGasto(datos, proyectoID) {
    for (let i = 0; i < proyectos.length ; i++){
        if(proyectos[i].ID === proyectoID){
            datos.ID = proyectos[i].gastos.length;
            proyectos[i].gastos.push(datos)
        }
    }
}

export function agregarPago(datos, proyectoID) {
    for (let i = 0; i < proyectos.length ; i++){
        if(proyectos[i].ID === proyectoID){
            datos.ID = proyectos[i].pagos.length;
            proyectos[i].pagos.push(datos)
        }
    }
}

export function borrarGasto(gastoID, proyectoID ){
    for (let i = 0; i < proyectos.length ; i++){
        if(proyectos[i].ID === proyectoID){
            let gastos = proyectos[i].gastos
            for (let j = 0; j < gastos.length ; j++) {
                if (gastos[j].ID === gastoID) {
                    console.log(gastos);
                    gastos.splice(j , 1);
                    console.log(gastos);
                }
            }
        }
    }
}

export function borrarPago(pagoID, proyectoID ){
    for (let i = 0; i < proyectos.length ; i++){
        if(proyectos[i].ID === proyectoID){
            let pagos = proyectos[i].pagos;
            for (let j = 0; j < pagos.length ; j++) {
                if (pagos[j].ID === pagoID) {
                    pagos.splice(j , 1);
                }
            }
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