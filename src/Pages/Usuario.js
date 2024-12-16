import React, {useState, useEffect, useCallback} from 'react';
import "../Componentes/Usuario/style.css";
import ListaDeProyectos from '../Componentes/Usuario/ListaDeProyectos/ListaDeProyectos';
import {getProyectos} from '../Api/apiProyectos';
import { getProyectobyID } from '../Servicios/ProyectosFunciones';

function Usuario (){
    const [listaProyectos, setListaProyectos] = useState([]);
    let cantidadDeProyectos = listaProyectos.length;
    let proyectoElegido = null;

    const cargarLosProyectos = async () => {
        try {
            const listaAuxiliar = await getProyectos();
            console.log("listaAuxiliar " + listaAuxiliar);
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

    const cambiarProyectoElegido = (proyectoID) => {
        proyectoElegido = getProyectobyID(listaProyectos, proyectoID);
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