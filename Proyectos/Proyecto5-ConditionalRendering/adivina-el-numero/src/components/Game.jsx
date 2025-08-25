import React, { useState, useEffect } from 'react';
import InputNumber from './InputNumber';  // Importamos el componente InputNumber
import Message from './Message';  // Importamos el componente Message
import RestartButton from './RestartButton';  // Importamos el componente RestartButton

function Game() 
{
    const [numeroSecreto, setNumeroSecreto] = useState(null);
    const [numeroIngresado, setNumeroIngresado] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [intentos, setIntentos] = useState(0);  // Estado para el contador de intentos

  // Genera un nuevo número secreto cuando el juego comienza o se reinicia
    const generarNumeroSecreto = () => 
    {
        const numero = Math.floor(Math.random() * 100) + 1;
        setNumeroSecreto(numero);
    };

    useEffect(() => 
    {
        generarNumeroSecreto();  // Inicializa el número secreto al montar el componente
    }, []);

  // Función para verificar el número ingresado
    const verificarNumero = () => 
    {
        const intento = parseInt(numeroIngresado, 10);

        if (isNaN(intento)) 
        {
            setMensaje('error');
            return;
        }

        // Aumentamos el contador de intentos
        setIntentos((prevIntentos) => prevIntentos + 1);

        if (intento === numeroSecreto) 
        {
            setMensaje('correcto');
        } 
        else if (intento < numeroSecreto) 
        {
            setMensaje('mayor');
        } 
        else 
        {
            setMensaje('menor');
        }
    };

    // Función para reiniciar el juego
    const reiniciarJuego = () => 
    {
        setNumeroIngresado('');
        setMensaje('');
        setIntentos(0);  // Reiniciamos el contador de intentos
        generarNumeroSecreto();
    };

    return (
        <div className="App">
        <h1>Juego: Adivina el Número</h1>
        <p>Estoy pensando en un número entre 1 y 100. ¿Cuál crees que es?</p>

        {/* Usamos el componente InputNumber */}
        <InputNumber
            numeroIngresado={numeroIngresado}
            setNumeroIngresado={setNumeroIngresado}
        />

        <button onClick={verificarNumero}>Verificar</button>

        {/* Usamos el componente Message para mostrar la retroalimentación */}
        <Message mensaje={mensaje} />

        {/* Usamos el componente RestartButton */}
        <RestartButton reiniciarJuego={reiniciarJuego} />

        {/* Opcional: Mostrar el número secreto */}
        <p style={{ fontStyle: 'italic' }}>Número secreto (debug): {numeroSecreto}</p>

        {/* Mostramos el contador de intentos */}
        <p>Intentos: {intentos}</p>
        </div>
    );
}

export default Game;

