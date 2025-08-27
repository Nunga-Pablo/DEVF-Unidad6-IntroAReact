import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Citas.css';

function Citas() 
{
  // Simulación de datos de citas
    const citas = [
        { id: 1, paciente: 'Ana Gómez', fecha: '2025-09-01', hora: '10:00 AM' },
        { id: 2, paciente: 'Luis Torres', fecha: '2025-09-02', hora: '2:00 PM' },
        { id: 3, paciente: 'María López', fecha: '2025-09-03', hora: '11:30 AM' },
    ];

    return (
        <div className="page-container citas-container">
        <h2>Listado de Citas</h2>
        <ul className="citas-lista">
            {citas.map((cita) => (
            <li key={cita.id} className="cita-item">
                <p><strong>Paciente:</strong> {cita.paciente}</p>
                <p><strong>Fecha:</strong> {cita.fecha}</p>
                <p><strong>Hora:</strong> {cita.hora}</p>
                <Link to={`/cita/${cita.id}`} className="detalle-link">Ver Detalle</Link>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default Citas;
