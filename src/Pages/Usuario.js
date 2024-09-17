import React, {useState} from 'react';
import "../Componentes/Usuario/style.css";
import NavProj from '../Componentes/Usuario/NavProj';
import Projecto from '../Componentes/Usuario/Projecto';

let projecto = 'n';

function Usuario (){

    const [estado, setEstado] = useState(true);

    const actualizarApp = (text) => {
        setEstado(!estado);
        projecto = text;
    }

    return (
        <article className='container-fluid artUsuario'>
            <NavProj 
                actualizar={actualizarApp}
            />
            <Projecto projecto ={projecto}/>
        </article>
    );
    
}

export default Usuario;