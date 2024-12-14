import React, {useState, useEffect} from 'react';
import "../Componentes/Usuario/style.css";
import ListaDeProyectos from '../Componentes/Usuario/ListaDeProyectos/ListaDeProyectos';
import {getProyectos} from '../Api/apiProyectos';
import { getProyectobyID } from '../Servicios/ProyectosFunciones';

function Usuario (){
    const [listaProyectos, setListaProyectos] = useState([]);
    const [cantidadDeProyectos, setCantidad] = useState(listaProyectos.length);
    const [proyectoElegido, setProyectoElegido] = useState(null);

    const cargarLosProyectos = async () => {
        try {
            const listaAuxiliar = await getProyectos();
            setListaProyectos(listaAuxiliar);
            console.log("Usuario/cargarLosProyectos> listaAuxiliar.length: " + listaAuxiliar.length)
            setCantidad(listaAuxiliar.length);
        } catch (error){
            console.log("### ERROR ###\n### en el useEffect, de la page Usuarios ###\n### Tratando de cargarLosProyectos\n");
        }
    };

    useEffect(() => {
        cargarLosProyectos();
    },[cantidadDeProyectos]);

    const actualizarApp = async () => {
        await cargarLosProyectos();
    }

    const cambiarProyectoElegido = (proyectoID) => {
        let proyectoElegido = getProyectobyID(ListaDeProyectos, proyectoID);
        setProyectoElegido(proyectoElegido);
    }

    return (
        <article id='articuloUsuario'>
            <ListaDeProyectos 
                actualizarApp={actualizarApp}
                listaProyectos = {listaProyectos}
                cambiarProyectoElegido = {cambiarProyectoElegido}
            />
            
        </article>
    );
    /** <Proyecto 
            proyectoElegido = {proyectoElegido}    
        />
    */
}

export default Usuario;