export async function validarLogin(email, clave) {
    const linkApi = 'http://localhost:8080/api/usuarios/login';
    try {
        const respuesta = await fetch(linkApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Especificamos que el cuerpo es JSON
            },
            body: JSON.stringify({ email, clave }), // Convertimos los datos a JSON
        });

        const dataJson = await respuesta.json();
        if(respuesta.status === 200){
            const token = await dataJson.token;
            const usuarioID = await dataJson.usuario.id;
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("usuarioID", usuarioID);
            sessionStorage.setItem("usuarioNombre", dataJson.usuario.nombre)
        }
        return dataJson;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        return null;
    }
}

export async function recuperarContraseña(email) {
    const linkApi = 'http://localhost:8080/api/usuarios/recuperarContra' // URL del backend
    try {
      const respuesta = await fetch(linkApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Enviamos el correo en el cuerpo de la solicitud
      });
  
      return respuesta;
    } catch (error) {
      console.error('Error al recuperar la contraseña:', error);
      return null;
    }
  }

  