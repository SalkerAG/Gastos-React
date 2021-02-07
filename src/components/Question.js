import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error'

const Question = ({setPresupuesto, setRestante, setPregunta}) => {

    // Definir el state
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value, 10));
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();
        // Validar
        if(cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }
        // Pasada la validación
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setPregunta(false);
    }

    return ( 
        <>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto"/> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </>
     );
}

Question.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setPregunta: PropTypes.func.isRequired,
}
 
export default Question;