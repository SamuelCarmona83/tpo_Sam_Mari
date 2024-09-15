import Carrucel from './LogOff/Carrusel.js';
import FormularioRegistro from './LogOff/FormularioRegistro.js';
import Navbar from './LogOff/navLogOff.js';
import Nosotros from './LogOff/Nosotros.js';
import './LogOff/style.css';
import VideoComponent from './LogOff/Video.js';



function Main(){

    return (
       
        <div id="mary2">
            <div>
                <Navbar />  
                <Carrucel />
            </div>
            <div className='row_spaceBetween'>
                <Nosotros/>
                <FormularioRegistro />
            </div>
            <VideoComponent></VideoComponent>
            
        </div>
        
    );


}

export default Main;