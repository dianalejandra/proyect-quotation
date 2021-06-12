import React, { useRef, useState } from "react";
import ReactDOM from 'react-dom';
import './index.scss';

const Conversor = () => {
  const [datosJason, setDatosJason] = useState([]);
    useEffect(()=>{
            fetch ('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
                .then( response => response.json())
                .catch (error => alert(`Salio mal. Error: ${error}`))
                .then ( datosJason => setDatosJason(datosJason)) 
    }, [])
  const valorini = useRef();
  const valCompraDol = datosJason.filter(dato[0].casa.venta).map((dato, i);
  const valCompraPes = datosJason.filter(dato[0].casa.compra).map((dato, i);
  const monedasel = useRef();
  const [resultado,setResultado] = useState();
  const exchange = () => {
          if(valorini.current.value >= 0){
                  if(monedasel.current.value == "1"){
                          let operacion = ((valorini.current.value)*valCompraDol).toFixed(2);
                          setResultado(operacion);
                          if(monedasel.current.value == "2"){
                            let operacion2 = ((valorini.current.value)/valCompraPes).toFixed(2)
                            setResultado(operacion2);
                          }
                  }
                  else{
                          setResultado("Error. Elija una opción.")
                  }                        
          }
          else{
                  setResultado("Ingrese un valor mayor que cero.")
          }
          
  }
  return(
          <>
          <div id="caja">
          <h1>Conversor de Pesos a Dólares</h1>
          <form id="cajita">
                  <input type="number" placeholder="Ingrese un importe..." ref={valorini}></input>
                  <select ref={monedasel}>
                          <option value="0">Elegir</option>
                          <option value="1">Dólares a pesos</option>
                          <option value="2">Pesos a dólares</option>
                  </select>
                  <input type="button" value="Convertir" onClick={exchange}></input>                  
          </form>
          </div>
          <div id="respuesta">{resultado && !isNaN(resultado)? <p>Resultado: {resultado}.</p> : null}</div>
          </>
          )
        }
ReactDOM.render(<Conversor/>, document.getElementById('root'));