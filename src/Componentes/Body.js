import Carrucel from './LogOff/Carrucel';
import FR from './LogOff/FormularioRegistro.js';
import Navbar from './LogOff/navLogOff.js';
import Nosotros from './LogOff/Nosotros.js';
import './LogOff/style.css';



function Body(){

    return (
       
        <div id="mary2">
            <div>
                <Navbar />  
                <Carrucel />
            </div>
            <FR />
            <Nosotros/>
        </div>
        
    );


}

export default Body;