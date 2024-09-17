import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projecto from './Projecto';

function ItemNavProj (props){
    return (
        <li className='itemNavProj d-flex f-row'>
            <h3>
                {props.text}
            </h3>
            <button>
                O
            </button>
        </li>
    );
}

export default ItemNavProj;