import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Home() {
    return (
        <div className="page-container home-container">
        <h1>Bienvenido a la Plataforma de Gestión de Citas</h1>
        <p>
            Esta plataforma permite a pacientes y doctores gestionar sus citas de manera rápida y eficiente.
            Puedes ver tus citas programadas o consultar los detalles de una cita específica.
        </p>

        <div className="home-button-container">
            <Link to="/citas" className="home-button">Ver Citas</Link>
            <Link to="/cita/1" className="home-button">Ir a Cita de Ejemplo</Link>
        </div>
        </div>
    );
}

export default Home;
