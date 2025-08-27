import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NotFound.css';

function NotFound() 
{
    return (
        <div className="page-container notfound-container">
        <h1>Error 404</h1>
        <p>La página que buscas no existe.</p>
        <Link to="/" className="volver-inicio">Volver al inicio</Link>
        </div>
    );
}

export default NotFound;
