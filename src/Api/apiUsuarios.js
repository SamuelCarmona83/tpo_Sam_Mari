export async function validarLogin(email, clave) {
    const linkApi = 'http://localhost:8080/api/usuarios/login'
    try {
        const respuesta = await fetch(linkApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Especificamos que el cuerpo es JSON
            },
            body: JSON.stringify({ email, clave }), // Convertimos los datos a JSON
        });
        return respuesta;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        return null;
    }
}