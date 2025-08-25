import React from 'react';

function RestartButton({ reiniciarJuego }) 
{
    return (
        <div>
        <button className="restart" onClick={reiniciarJuego}>Reiniciar Juego</button>
        </div>
    );
}

export default RestartButton;
