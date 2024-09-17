import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemNavProj from './ItemNavProj';

function NavProj () {

    return(
        <ul className='navProj container'>
            <ItemNavProj text="Projecto 1"/>
            <ItemNavProj text="Projecto 2"/>
            <ItemNavProj text="Projecto 3"/>
        </ul>
    );
}

export default NavProj;