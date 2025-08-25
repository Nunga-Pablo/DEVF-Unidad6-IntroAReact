import React from 'react';

function InputNumber({ numeroIngresado, setNumeroIngresado }) 
{
    return (
    <div>
        <input
            type="number"
            value={numeroIngresado}
            onChange={(e) => setNumeroIngresado(e.target.value)}
            placeholder="Ingresa tu número"
        />
    </div>
    );
}

export default InputNumber;
