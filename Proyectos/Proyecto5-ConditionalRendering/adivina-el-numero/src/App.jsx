import React from 'react';
import Game from './components/Game';  // Importamos el componente Game
import './App.css';  // Importamos los estilos CSS

function App() 
{
  return (
    <div className="App">
      <h1>Bienvenido al Juego de Adivinar el Número</h1>
      {/* Agregamos el componente Game aquí */}
      <Game />
    </div>
  );
}

export default App;