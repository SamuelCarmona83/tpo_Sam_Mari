import React, {useState} from 'react';
import "../Componentes/Usuario/style.css";
import NavProy from '../Componentes/Usuario/NavProy';
import Proyecto from '../Componentes/Usuario/Proyecto';

function Usuario (){

    let [proyectoID, setProyectoID] = useState('n');

    const actualizarApp = (ID) => {
        proyectoID = ID;
        setProyectoID(proyectoID);
    }

    return (
        <article className='container-fluid artUsuario'>
            <NavProy 
                actualizar={actualizarApp}
            />
            <Proyecto proyectoID ={proyectoID}/>
        </article>
    );
    
}

export default Usuario;