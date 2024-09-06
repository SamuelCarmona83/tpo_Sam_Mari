import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField } from '@mui/material';

function FormularioRegistro (){

    return (
        <article className='wid_5 registro'>
            <h3>
                Registrate
            </h3>
            <div className='item_Registro'>
                <TextField
                    required
                    id="outlined-required"
                    label="Correo Electrónico"
                    defaultValue=""
                />
            </div>
            <div className='item_Registro'>
                <TextField
                id="outlined-password-input"
                label="Contraseña"
                type="password"
                autoComplete="current-password"
                />
            </div>
            <div className='item_Registro'>
                <TextField
                id="outlined-password-input"
                label="Repita Contraseña"
                type="password"
                autoComplete="current-password"
                />  
            </div>
            
            
           
            <Button variant="contained">Registrate</Button>
        </article>
    );
}

export default FormularioRegistro;