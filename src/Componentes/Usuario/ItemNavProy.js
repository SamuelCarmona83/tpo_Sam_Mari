import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../imagenes/cuadrado.svg';

function ItemNavProj (props){
    const actualizar = props.actualizar;
    let id = props.id;
    let nombre = props.nombre;
    return (
        <li className='itemNavProy d-flex f-row'>
            <h3>
                {nombre}
            </h3>
            <button onClick={() => {actualizar(id)}}>
                <img src={logo} />
            </button>
        </li>
    );
}

export default ItemNavProj;