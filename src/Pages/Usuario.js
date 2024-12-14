import React, {useState, useEffect} from 'react';
import "../Componentes/Usuario/style.css";
import NavProy from '../Componentes/Usuario/NavProy';
import Proyecto from '../Componentes/Usuario/Proyecto';
import {getProyectos} from '../Api/apiProyectos';

function Usuario (){

    let [proyectoID, setProyectoID] = useState('n');
    let [listaProyectos, setListaProyectos] = useState([]);

    useEffect(() => {
        const cargarLosProyectos = async () => {
            try {
                const listaAuxiliar = await getProyectos();
                setListaProyectos(listaAuxiliar);
            } catch (error){
                console.log("### ERROR ###\n### en el useEffect, de la page Usuarios ###\n### Tratando de cargarLosProyectos\n");
            }
        };

        cargarLosProyectos();
    },[]);

    return (
        <article id='articuloUsuario'>
            <NavProy 
                actualizar={setProyectoID}
            />
            <Proyecto 
                proyectoID ={proyectoID} 
              
                listaProyectos = {listaProyectos}
            />
        </article>
    );
    
}

export default Usuario;