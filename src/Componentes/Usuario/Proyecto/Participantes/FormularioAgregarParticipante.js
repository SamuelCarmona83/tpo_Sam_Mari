import React, { useEffect, useState } from 'react';
import { buscarUsuario } from '../../../../Api/apiUsuarios';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { agregarParticipante } from '../../../../Api/apiProyectos';

const UsuarioPlantilla = ({usuario, cerrarFormulario, proyecto, actualizarApp}) => {
    const agregarUsuario = async () => {
        try{
            const respuestaApi = await agregarParticipante(usuario.ID,proyecto.ID);
            alert(respuestaApi.mensaje);
            actualizarApp(proyecto.ID);
        }catch (error){
            console.log("###  ERROR EN EL TRY DE agregarUsuario  ###\n### participantes/formularioAgregarParticipantes/plantillausuario>  ###")
        }
        cerrarFormulario();
    }
    return(
        <li className='UsuarioPlantilla'>
            <p>
                {usuario.nombre}
            </p>
            <p>
                {usuario.email}
            </p>
            <button onClick={agregarUsuario}>
                <PersonAddIcon />
            </button>
            
        </li>
    );
}

export default function FormularioAgregarParticipante({proyecto, cerrarFormulario, actualizarApp}){
    const [nombre, setNombre] = useState("");
    const [listaDeUsuarios, setListaDeUsuarios] = useState([]);
    
    const manejarEnvio = async (e) => {
        e.preventDefault();
        try {
            let listaRespuestaApi = await buscarUsuario(nombre);
            setListaDeUsuarios(listaRespuestaApi);
            setNombre(" ");
        }catch(error){
            console.log("###   ERROR   ###\n###   En el formularioAgregarParticipante   ###\n###   tratando de llamar a la Api   ###");
        }
    };
    
    return (
        <form onSubmit={manejarEnvio}>
            <div id='formularioAgregarParticipantes'>
                <div>
                    <label htmlFor="nombre">Nombre: </label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Escribe el nombre aquí"
                        required
                    />
                    <button type="submit">Buscar</button>
                </div>
                <ul>
                    {listaDeUsuarios.map((usuario) => (<UsuarioPlantilla proyecto={proyecto} usuario={usuario} cerrarFormulario={cerrarFormulario} actualizarApp={actualizarApp}/>))}
                </ul>
                <button onClick={cerrarFormulario}>Cerrar</button>
            </div>
            
        </form>
    );
}