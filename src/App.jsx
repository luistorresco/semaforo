import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeColor, setActiveColor] = useState('');

  const CambiarColor = (color) => {
    setActiveColor((prevColor) => (prevColor === color ? '' : color));
  };

  return (
   
    <>

<div className="palo"/>

        <div className={`semaforo ${activeColor}`}>
          <div className={`light red ${activeColor === 'red' ? 'active' : '' }`} />
          <div className={`light yellow ${activeColor === 'yellow' ? 'active' : ''}`} />
          <div className={`light green ${activeColor === 'green' ? 'active' : ''}`} />
          <div className="buttons">
          <button onClick={() => CambiarColor('red')}>Rojo</button>
          <button onClick={() => CambiarColor('yellow')}>Amarillo</button>
          <button onClick={() => CambiarColor('green')}>Verde</button>
        </div>
        </div>
        
 
    </>
  );
}

export default App;
