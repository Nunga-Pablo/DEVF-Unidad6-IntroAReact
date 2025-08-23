import React, {useState, useEffect, useMemo } from 'react';
import Planeta from './Components/Planeta';
import './App.css'

function App() 
{
  const planetasDisponibles = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"];
  // ... (estado)
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  useEffect(() => 
  {
    console.log("¡El panel está listo!"); // Montaje

    const intervalo = setInterval(() => 
    { // Montaje
      setCombustible(previousCombustible => previousCombustible - 1);
      setDistancia(previousDistancia => previousDistancia + 1);
    }, 1000);

    return () => 
    {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, []);

  useEffect(() => 
  {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  const mensajeEstado = useMemo(() => 
  {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  return (
    <div className="app-container">
      <h1>
        <div>Distancia: {distancia}</div>
        <div>Combustible: {combustible}</div>
        <div>{mensajeEstado}</div>
      </h1>

    <button
      onClick={() => 
      {
        setEstadoNave("Aterrizando");

        // Filtrar los planetas que aún no han sido visitados
        const planetasNoVisitados = planetasDisponibles.filter(
          planeta => !planetasVisitados.includes(planeta)
        );

        if (planetasNoVisitados.length === 0) 
        {
          alert("¡Ya has visitado todos los planetas!");
          return;
        }

        // Seleccionar un planeta aleatorio de los no visitados
        const planetaAleatorio = planetasNoVisitados[Math.floor(Math.random() * planetasNoVisitados.length)];

        setPlanetasVisitados(prev => 
        (
          prev.includes(planetaAleatorio) ? prev : [...prev, planetaAleatorio]
        ));
      }}> Aterrizar
    </button>

    {planetasVisitados.length === 0 ? 
    (
      <p>No has visitado ningún planeta aún.</p>
    ) : 
    (
      planetasVisitados.map((planeta, index) => 
      (
        <Planeta key={index} nombre={planeta} />
      ))
    )}
  </div>
);
}

export default App; //