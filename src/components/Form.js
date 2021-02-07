import React, {useState} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error'

const Form = ({setGasto, setCrearGasto, restante}) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();
        // Validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === '' || cantidad > restante){
            setError(true);
            return;
        }
        setError(false);

        // Construir gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        
        // Pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);

        //Reiniciar form
        document.form.reset(); 
        setNombre('');
        setCantidad(0);
    }

    return ( 
        <form
            name="form"
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto"/> : null}
            <div className="campo">
                <label>Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                />
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    );
}

Form.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default Form;