import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../imagenes/cuadrado.svg';

function ItemNavProj (props){
    const actualizar = props.actualizar;
    let proj = props.text;
    return (
        <li className='itemNavProj d-flex f-row'>
            <h3>
                {proj}
            </h3>
            <button onClick={() => {actualizar(proj)}}>
                <img src={logo} />
            </button>
        </li>
    );
}

export default ItemNavProj;