import React, { useState, useEffect, useMemo } from 'react';
import './App.css'; // 👈 Importa el CSS

function App() {
  const [tareas, setTareas] = useState(() => {
  const tareasGuardadas = localStorage.getItem('tareas');
  return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');

  const [searchInput, setSearchInput] = useState("");

  // Efecto secundario: Actualizar el título del documento cada vez que cambia el total
  useEffect(() => {
  localStorage.setItem('tareas', JSON.stringify(tareas)); // Guardar tareas en localStorage cuando cambien
  }, [tareas]);  // Se ejecuta cada vez que las tareas cambian

  // Cálculo de tiempo total optimizado con useMemo
  const calcularTiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]); // Solo se recalcula cuando cambian las tareas

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion)
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  const filteredItems = useMemo(() => {
    return tareas.filter(item => {
      const nombreCoincide = item.nombre.toLowerCase().includes(searchInput.toLowerCase());
      const duracionCoincide = item.duracion.toString().includes(searchInput);
      return nombreCoincide || duracionCoincide;
    });
  }, [tareas, searchInput]);


  return (
    <div>
      <h1>Contador de Tareas</h1>
      <div>
        <input 
          type="text" 
          value={nuevaTarea} 
          onChange={(e) => setNuevaTarea(e.target.value)} 
          placeholder="Nombre de la tarea" 
        />
        <input 
          type="number" 
          value={duracion} 
          onChange={(e) => setDuracion(e.target.value)} 
          placeholder="Duración en minutos" 
        />
        <button onClick={agregarTarea}>Agregar tarea</button>
      </div>

      <div>
            <h1>Tareas</h1>
            <input 
                type="text"
                placeholder = "Busca una tarea"
                value = {searchInput}
                onChange = {(e) => setSearchInput(e.target.value)}
            />
            
            <ul>
                {filteredItems.map(item => (
                    <li>
                        <p>{item.nombre} {item.duracion}</p>
                    </li>
                ))}
            </ul>
        </div>

      <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>
    </div>
  );
}

export default App;