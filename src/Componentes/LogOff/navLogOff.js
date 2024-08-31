import './style.css';


function Navbar (){
    return (
        <nav className="logOfNavBar">
            <div className="divNav">
                <figure >
                    <img className='logoNav' src="../../Imagenes/CatLogo.png" alt='Logo de la pagina, es un gato'/>
                </figure>
                <ul>
                    <li>Regístrate</li>

                    <li>Iniciar sesión</li>
                </ul>
            </div>
            
        </nav>
    );
    
}
export default Navbar;