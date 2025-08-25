import React from 'react';

function Message({ mensaje }) 
{
  let messageClass = 'informativo';  // Clase predeterminada para mensajes generales

  // Asignamos la clase según el tipo de mensaje
    if (mensaje === 'correcto') 
    {
        messageClass = 'correcto';
    } 
    else if (mensaje === 'mayor' || mensaje === 'menor') 
    {
        messageClass = 'mayor';
    } 
    else if (mensaje === 'error') 
    {
        messageClass = 'error';
    }

    return (
        <div>
        <p className={messageClass}>
            {mensaje === 'correcto'
            ? '¡Correcto! Has adivinado el número 🎉'
            : mensaje === 'mayor'
            ? 'El número es mayor. ¡Intenta con un número mayor!'
            : mensaje === 'menor'
            ? 'El número es menor. ¡Intenta con un número menor!'
            : mensaje === 'error'
            ? 'Por favor ingresa un número válido.'
            : 'Ingresa un número para comenzar a jugar.'}
        </p>
        </div>
    );
}

export default Message;
