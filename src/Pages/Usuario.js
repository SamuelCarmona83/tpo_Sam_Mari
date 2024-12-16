import React, {useState, useEffect, useCallback} from 'react';
import "../Componentes/Usuario/style.css";
import ListaDeProyectos from '../Componentes/Usuario/ListaDeProyectos/ListaDeProyectos';
import {getProyectos} from '../Api/apiProyectos';
import { getProyectobyID } from '../Servicios/ProyectosFunciones';
import Proyecto from '../Componentes/Usuario/Proyecto/Proyecto';

function Usuario (){
    const [listaProyectos, setListaProyectos] = useState([]);
    const [proyectoElegido, setProyecto] = useState(null);
    let cantidadDeProyectos = listaProyectos.length;

    const cargarLosProyectos = async () => {
        try {
            const listaAuxiliar = await getProyectos();
            setListaProyectos(listaAuxiliar);
            cantidadDeProyectos = listaProyectos.length;
        } catch (error){
            console.log("### ERROR ###\n### en el useEffect, de la page Usuarios ###\n### Tratando de cargarLosProyectos\n");
        }
    };

    useEffect(() => {
        cargarLosProyectos();
    },[]);

    const actualizarApp = async () => {
        await cargarLosProyectos();
    }

    const cambiarProyectoElegido = (proyectoNuevo) => {
        setProyecto(proyectoNuevo);
    }

    return (
        <article id='articuloUsuario'>
            <ListaDeProyectos 
                actualizarApp={actualizarApp}
                listaProyectos = {listaProyectos}
                cambiarProyectoElegido = {cambiarProyectoElegido}
            />
            <Proyecto 
                proyectoElegido = {proyectoElegido}    
            />
        </article>
    );
}

export default Usuario;