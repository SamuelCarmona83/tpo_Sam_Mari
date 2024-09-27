import React, {useState} from 'react';
import "../Componentes/Usuario/style.css";
import NavProy from '../Componentes/Usuario/NavProy';
import Proyecto from '../Componentes/Usuario/Proyecto';

function Usuario (){

    let [proyectoID, setProyectoID] = useState('n');

    const actualizarApp = (ID) => {
        setProyectoID(ID);
    }

    return (
        <article id='articuloUsuario'>
            <NavProy 
                actualizar={actualizarApp}
            />
            <Proyecto proyectoID ={proyectoID} actualizar={actualizarApp}/>
        </article>
    );
    
}

export default Usuario;