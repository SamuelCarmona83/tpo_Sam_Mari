import "../Componentes/PerfilUsuario/style.css";
import React from 'react';

function getUsuarioLogeado() {
    return {
        nombre: "Juan",
        apellido: "Pérez",
        genero: "Masculino",
        fechaNacimiento: "1990-01-01",
        fotoUrl: "https://www.example.com/foto.jpg"  // URL de la foto del usuario
    };
}

export default function Perfil () {
    // Obtener los datos del usuario
    const usuario = getUsuarioLogeado();

    return (
        <article id="perfilArticle">
            <h1>Perfil de Usuario</h1>
            <div className="perfil-info">
                <img 
                    src={usuario.fotoUrl} 
                    alt={`${usuario.nombre} ${usuario.apellido}`} 
                    className="perfil-foto"
                    style={{ width: '150px', borderRadius: '50%' }} // Estilos para la foto de perfil
                />
                <div className="perfil-detalles">
                    <p><strong>Nombre:</strong> {usuario.nombre}</p>
                    <p><strong>Apellido:</strong> {usuario.apellido}</p>
                    <p><strong>Género:</strong> {usuario.genero}</p>
                    <p><strong>Fecha de Nacimiento:</strong> {new Date(usuario.fechaNacimiento).toLocaleDateString()}</p>
                </div>
            </div>
        </article>
    );
};