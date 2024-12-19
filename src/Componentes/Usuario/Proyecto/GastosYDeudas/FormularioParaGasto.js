import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, MenuItem} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { listarParticipantesParaElFormularioGasto } from '../../../../Servicios/GastosFunciones';
import SaveIcon from '@mui/icons-material/Save';
import { crearGasto } from '../../../../Api/apiGastos';

export default function FormularioParaGasto ({proyecto, visibilidad, cerrar, actualizarApp}) {
    const [descripcion, setDescripcion] = useState('');
    const [monto, setMonto] = useState('');
    const [fecha, setFecha] = useState('');
    const [imagen, setImagen] = useState(null);
    const [estrategiaDeDivision, setEstrategiaDeDivision] = useState("equitativo");
    let usuarioID = sessionStorage.getItem("usuarioID");
    const [listaParticipantes, setListaParticipantes] = useState(listarParticipantesParaElFormularioGasto(proyecto, usuarioID).map(participante => JSON.parse(participante)) || []);
    const [visibilidadDeParticipantes, setVisibilidadParticipantes] = useState(false);
    const [valoresTemporales, setValoresTemporales] = useState(
        listaParticipantes.map((participante) => participante.porcentaje * 100)
    );

    const manejarCambioInput = (valor, indice) => {
        const nuevosValores = [...valoresTemporales];
        nuevosValores[indice] = valor;
        setValoresTemporales(nuevosValores);
    };

    const guardarPorcentaje = (indice, usuarioID) => {
        let listaAuxiliar = [];
        let valoresTemporalesAux = [...valoresTemporales]
        for(let i=0; i<valoresTemporalesAux.length;i++){
            if(valoresTemporalesAux[i] > 100){
                valoresTemporalesAux[i] = 100;
            }else if(valoresTemporalesAux[i] < 0){
                valoresTemporalesAux[i] = 0;
            }
        }
        const respuesta = hayQueCompensar(valoresTemporalesAux);
        if (respuesta.mensaje === 'no'){
            
            listaAuxiliar = cambiarPorcentajes(valoresTemporalesAux, listaParticipantes);
            setListaParticipantes(listaAuxiliar);
            setValoresTemporales(valoresTemporalesAux);
        }else{
            let diferenciaRepartida = respuesta.diferencia / (valoresTemporalesAux.length - 1);
            let arrastre=0;
            for(let i=0; i<valoresTemporalesAux.length; i++){
                if (indice !== i){
                    if ((valoresTemporalesAux[i] - diferenciaRepartida) + arrastre >= 0){
                        valoresTemporalesAux[i] -= diferenciaRepartida + arrastre;
                        arrastre = 0;
                    }else {
                        let aux = -(valoresTemporalesAux[i])+(diferenciaRepartida - (arrastre));
                        valoresTemporalesAux[i] -= ((diferenciaRepartida - (arrastre)) + aux);
                        arrastre = -(aux);
                    }
                }
            }
            listaAuxiliar = cambiarPorcentajes(valoresTemporalesAux, listaParticipantes);
            setListaParticipantes(listaAuxiliar);
            setValoresTemporales(valoresTemporalesAux);
        }
    };

    const cambiarPorcentajes = (listaDatos, listaACambiar) =>{
        let lista = [...listaACambiar];
        for(let i=0; i<lista.length; i++){
            lista[i].porcentaje = listaDatos[i] / 100;
        }
        return lista;
    }

    const cambioEstrategiaDiv = (event) => {
        setEstrategiaDeDivision(event.target.value);
        if(event.target.value === "equitativo"){
            setVisibilidadParticipantes(false);
            setListaParticipantes(listarParticipantesParaElFormularioGasto(proyecto, usuarioID).map(participante => JSON.parse(participante)) || []);
            setValoresTemporales(listaParticipantes.map((participante) => participante.porcentaje * 100));
        }else {
            setVisibilidadParticipantes(true);
        }
    }

    const hayQueCompensar = (valoresTemporales) => {
        let sumaPorcentajes = 0;
        for(let porcentaje of valoresTemporales){
            sumaPorcentajes += porcentaje;
        }
        if (sumaPorcentajes > 100 || sumaPorcentajes < 100){
            return {
                mensaje : 'si',
                diferencia : sumaPorcentajes - 100
            };
        }else {
            return {
                mensaje : 'no',
                diferencia : sumaPorcentajes - 100
            };
        }
    }

    const cargarImagen = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagen(reader.result);
            };
            reader.readAsDataURL(file); // Lee la imagen como Data URL
        }
    };


    const botonGuardar = async () => {
        let usuarioID = sessionStorage.getItem("usuarioID");
        if( Number(monto) < 0 ){
            alert("El monto debe ser un numero mayor a 0");
            return;
        }
        if(descripcion === ''){
            alert("La descripcion esta vacia");
        }
        let participantes = listaParticipantes.filter(participante => participante.ID !== usuarioID);
        try{
            await crearGasto(monto, imagen ? imagen : '' ,descripcion,proyecto.ID,participantes);
        }catch (error) {
            console.log("###  ERROR en el try de botonGuardar en formularioParaGasto.js  ###");
        }
        cerrarFormulario();
    };

    const cerrarFormulario = () => {
        setEstrategiaDeDivision("equitativo");
        setListaParticipantes(listarParticipantesParaElFormularioGasto(proyecto, usuarioID).map(participante => JSON.parse(participante)) || []);
        setValoresTemporales(listaParticipantes.map((participante) => participante.porcentaje * 100));
        setVisibilidadParticipantes(false);
        setDescripcion('');
        setMonto('');
        setFecha('');
        setImagen(null);
        actualizarApp(proyecto.ID);
        cerrar();
    }

    const ListaDeParticipantes = () => {
        return (<ul>
            {listaParticipantes.map((participante, indice) => {
                
                return <li className='listItemParticipante'>
                    <p>{participante.nombre}</p>
                    <TextField
                        label="Porcentaje"
                        type="number"
                        value={valoresTemporales[indice]}
                        onChange={(e) => manejarCambioInput(Number(e.target.value), indice)}
                        margin="normal"
                    />
                    <button onClick={() => guardarPorcentaje(indice, participante.ID)}> 
                        <SaveIcon />
                    </button>
                </li>
            })}
        </ul>);
    }
    return (
        <Dialog open={visibilidad} onClose={cerrarFormulario}>
            <DialogTitle>Creando Nuevo Gasto</DialogTitle>
            <DialogContent>
                <TextField
                    label="Descripción"
                    fullWidth
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Monto"
                    fullWidth
                    type="number"
                    value={monto}
                    onChange={(e) => setMonto(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Fecha"
                    fullWidth
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
                {listaParticipantes.length > 1 && 
                    <TextField
                        select
                        fullWidth
                        label="Elija como repartir el gasto"
                        defaultValue={estrategiaDeDivision}
                        onChange={cambioEstrategiaDiv}
                        helperText="Seleccione una"
                        margin="normal"
                    >
                        <MenuItem key='equitativo' value='equitativo'>
                            Dividir Equitativamente
                        </MenuItem>
                        <MenuItem key='personalizado' value='personalizado'>
                            personalizar los porcentajes
                        </MenuItem>
                    </TextField>
                }
                {visibilidadDeParticipantes && <ListaDeParticipantes />}
                <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    startIcon={<PhotoCamera />}
                    sx={{ marginTop: 2 }}
                >
                    Subir Imagen
                    <input
                        type="file"
                        hidden
                        onChange={cargarImagen}
                    />
                </Button>
            </DialogContent>
            <DialogActions>
                <Button onClick={cerrarFormulario} color="primary">
                    Cancelar
                </Button>
                <Button onClick={botonGuardar} color="primary">
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>
    );
}