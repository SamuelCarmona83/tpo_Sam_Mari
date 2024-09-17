import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemNavProj from './ItemNavProj';

function NavProj (props) {
    const actualizar = props.actualizar;

    return(
        <ul className='navProj container vh-n'>
            <ItemNavProj text="Projecto 1" actualizar={actualizar}/>
            <ItemNavProj text="Projecto 2" actualizar={actualizar}/>
            <ItemNavProj text="Projecto 3" actualizar={actualizar}/>
        </ul>
    );
}

export default NavProj;