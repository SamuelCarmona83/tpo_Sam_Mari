import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemNavProj from './ItemNavProy';

const proyectos = [{
    text:"proyecto 1",
    ID: 0
},{
    text:"proyecto 2",
    ID: 1
},{
    text:"proyecto 3",
    ID: 2
},{
    text:"proyecto 4",
    ID: 3
},{
    text:"proyecto 5",
    ID: 4
},{
    text:"proyecto 6",
    ID: 5
},{
    text:"proyecto 7",
    ID: 6
},{
    text:"proyecto 8",
    ID: 7
},{
    text:"proyecto 9",
    ID: 8
}];


function NavProy (props) {
    const actualizar = props.actualizar;
    
    return(
        <ul id='proyectos' className='navProy container vh-n'>
            {proyectos.map((i, index) => {
                return <ItemNavProj 
                    key={index} 
                    actualizar={actualizar} 
                    id={i.ID}
                    nombre={i.text}/>
                })
            }
        </ul>
    );
}

export default NavProy;