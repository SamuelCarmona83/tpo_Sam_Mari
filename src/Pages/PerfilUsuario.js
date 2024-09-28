import React from 'react';
import "../Componentes/PerfilUsuario/style.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; 
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera'; // Cambiado a ícono de cámara


export default function CircularProfileImage() {
    const [open, setOpen] = React.useState(false);
    const [usuario, setUsuario] = React.useState({
        nombre: "Mariangel Villegas",
        edad: 28,
        email: "Mariangel@gmail.com",
        fechaNacimiento: "1989-05-15"
    });

    const [nuevoNombre, setNuevoNombre] = React.useState(usuario.nombre);
    const [nuevaEdad, setNuevaEdad] = React.useState(usuario.edad);
    const [nuevoEmail, setNuevoEmail] = React.useState(usuario.email);
    const [nuevaFechaNacimiento, setNuevaFechaNacimiento] = React.useState(usuario.fechaNacimiento);
    const [fotoPerfil, setFotoPerfil] = React.useState('https://static.vecteezy.com/system/resources/thumbnails/046/850/555/small/portrait-of-a-smiling-businesswoman-with-glasses-working-on-a-laptop-in-a-modern-office-environment-professional-and-confident-office-worker-photo.jpg');

    const abrirFormulario = () => {
        setOpen(true);
    };

    const botonCerrar = () => {
        setOpen(false);
    };

    const handleEdit = () => {
        setUsuario({
            nombre: nuevoNombre,
            edad: nuevaEdad,
            email: nuevoEmail,
            fechaNacimiento: nuevaFechaNacimiento
        });
        botonCerrar();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFotoPerfil(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    //      formulario para cambiar la contraseña       //

    return (
        <div className="perfil-container">
            <div className="perfil-image" style={{ position: 'relative' }}>
                <img 
                    src={fotoPerfil} 
                    alt="User profile" 
                    className="circular-image" 
                />
                <input 
                    type="file" 
                    accept="image/*" 
                    style={{ display: 'none' }} 
                    id="file-input"
                    onChange={handleImageChange}
                />
                <label htmlFor="file-input">
                    <Button 
                        variant="contained" 
                        color="" 
                        component="span"
                        sx={{ position: 'absolute', 
                            top: '20px', 
                            right: '20px',
                            borderRadius: '50%', 
                            padding: '10px'
                             }}
                    >
                        <PhotoCamera />
                    </Button>
                </label>
            </div>
            <Card className="perfil-card">
                <CardContent>
                    <Typography variant="h5" component="div">
                        Datos Personales
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Nombre: {usuario.nombre}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Edad: {usuario.edad}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Email: {usuario.email}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Fecha de Nacimiento: {usuario.fechaNacimiento}
                    </Typography>
                    <Button 
                        variant="outlined" 
                        color="" 
                        onClick={abrirFormulario}
                        sx={{ marginTop: 2 }}
                    >
                        Editar
                    </Button>
                </CardContent>
            </Card>
            <Dialog open={open} onClose={botonCerrar}>
                <DialogTitle>Editar Datos Personales</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Nombre"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={nuevoNombre}
                        onChange={(e) => setNuevoNombre(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Edad"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={nuevaEdad}
                        onChange={(e) => setNuevaEdad(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={nuevoEmail}
                        onChange={(e) => setNuevoEmail(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Fecha de Nacimiento"
                        type="date"
                        fullWidth
                        variant="outlined"
                        value={nuevaFechaNacimiento}
                        onChange={(e) => setNuevaFechaNacimiento(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={botonCerrar} color="">
                        Cancelar
                    </Button>
                    <Button onClick={handleEdit} color="">
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
