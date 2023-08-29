import React from 'react';
import '../estilos/Boton_contador.css'

function Boton_contador({texto, esBotonDeClic,manejarClic}){
    return(
        <button 
            className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} 
            onClick={manejarClic}>
            {texto}
        </button>
    )
}

export default Boton_contador;