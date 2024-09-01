import './style.css';
import logo from '../../imagenes/CatLogoSF.png';

function Navbar (){
    return (
        <nav className="logOfNavBar">
            <div className="divNav">
                <figure >
                <img className='logoNav' src={logo} alt='Logo de la pagina, es un gato'/>
                </figure>
                <ul>
                    <li>Regístrate</li>

                    <li>
                        <button className='buttonNav'>Iniciar sesión</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
    
}
export default Navbar;