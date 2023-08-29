import './App.css';
import logo_betis from './imagenes/logo-betis.png';
import Boton_contador from './componentes/Boton_contador'
import Contador from './componentes/Contador';
import {useState} from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);


  const aumentarContador = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }


  return (
    <div className="App">
      <div className='logo-betis-container'>
        <img className='logo-betis' src={logo_betis} />
      </div>
      <div className='contenedor-principal'>
      <Contador numClics={numClics}/>
      <div className='contenedor-secundario'>
        <Boton_contador 
        texto='Click'
        esBotonDeClic={true} 
        manejarClic={aumentarContador}/>
        <Boton_contador 
        texto='Reiniciar'
        esBotonDeClic={false} 
        manejarClic={reiniciarContador} />
      </div>
        
      </div>
    </div>
  );
}

export default App;
