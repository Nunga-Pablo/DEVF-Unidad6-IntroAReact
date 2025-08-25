import React from 'react';
import CounterGame from './CounterGame';
import InventoryManager from './InventoryManager';
import './App.css';

function App() 
{
  return (
    <div className="App">
      <h1>Aplicación de Gestión</h1>

      <section>
        <h2>🧮 Juego del Contador</h2>
        <CounterGame />
      </section>

      <hr />

      <section>
        <h2>📦 Gestor de Inventario</h2>
        <InventoryManager />
      </section>
    </div>
  );
}

export default App;
