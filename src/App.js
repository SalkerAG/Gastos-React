import Question from './components/Question'
import Form from './components/Form'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

import {useState, useEffect} from 'react';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [creargasto, setCrearGasto] = useState(false);

  // useEffect que actualiza el restante
  useEffect(() => {
    if(creargasto) {
      // Agrega el nuevo presupuesto
      setGastos([
        ...gastos,
        gasto
      ]);
      // Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
      setCrearGasto(false);
    }
  }, [gasto]);


  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ?
            (
              <Question 
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPregunta={setPregunta}
              /> 
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Form 
                    setGasto={setGasto}
                    restante={restante}
                    setCrearGasto={setCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos={gastos}
                  />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
