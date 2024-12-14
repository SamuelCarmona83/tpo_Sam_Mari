import React, {useState, useEffect} from 'react';
import "../Componentes/Usuario/style.css";
import ListaDeProyectos from '../Componentes/Usuario/ListaDeProyectos/ListaDeProyectos';
import Proyecto from '../Componentes/Usuario/Proyecto';
import {getProyectos} from '../Api/apiProyectos';

function Usuario (){
    const [listaProyectos, setListaProyectos] = useState([]);
    const [proyectoElegido, setProyectoElegido] = useState(null);

    const cargarLosProyectos = async () => {
        try {
            const listaAuxiliar = await getProyectos();
            setListaProyectos(listaAuxiliar);
        } catch (error){
            console.log("### ERROR ###\n### en el useEffect, de la page Usuarios ###\n### Tratando de cargarLosProyectos\n");
        }
    };

    useEffect(() => {
        cargarLosProyectos();
    },[listaProyectos]);

    const actualizarApp = async () => {
        await cargarLosProyectos();
    }

    const cambiarProyectoElegido = (proyectoID) => {
        for(let i = 0 ; i < listaProyectos.length ; i++){
            if(listaProyectos[i].ID === proyectoID){
                console.log("Usuario/CambiarProyectoElegido> listaProyectos[i]: \n"+listaProyectos[i]);
            }
            
        }
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