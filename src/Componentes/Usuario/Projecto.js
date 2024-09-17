import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projecto (props) {
    const [estadoProj, setEstado] = useState(false);

    const actualizarProjecto = (props) => {
        setEstado(!estadoProj);
    }

    const generarContenido = () => {
        
    }

    return (
        <article className='projecto'>
            <h2>Bienvenidos, aqui va el projecto</h2>
        </article>
    );
}

export default Projecto;