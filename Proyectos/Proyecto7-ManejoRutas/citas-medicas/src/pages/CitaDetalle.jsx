import { useParams, Link } from 'react-router-dom';
import '../css/CitaDetalle.css';

function CitaDetalle() 
{
    const { id } = useParams();

    // Simulación de citas almacenadas
    const citas = [
        { id: '1', paciente: 'Ana Gómez', fecha: '2025-09-01', hora: '10:00 AM', doctor: 'Dr. Martínez', motivo: 'Chequeo general' },
        { id: '2', paciente: 'Luis Torres', fecha: '2025-09-02', hora: '2:00 PM', doctor: 'Dra. Fernández', motivo: 'Dolor de cabeza' },
        { id: '3', paciente: 'María López', fecha: '2025-09-03', hora: '11:30 AM', doctor: 'Dr. García', motivo: 'Control post-operatorio' },
    ];

    // Buscar cita por ID
    const cita = citas.find(c => c.id === id);

    return (
        <div className="page-container detalle-container">
        {cita ? (
            <>
            <h2>Detalles de la Cita</h2>
            <p><strong>Paciente:</strong> {cita.paciente}</p>
            <p><strong>Fecha:</strong> {cita.fecha}</p>
            <p><strong>Hora:</strong> {cita.hora}</p>
            <p><strong>Doctor:</strong> {cita.doctor}</p>
            <p><strong>Motivo:</strong> {cita.motivo}</p>
            </>
        ) : (
            <p className="no-encontrada">No se encontró una cita con el ID: <strong>{id}</strong></p>
        )}

        <Link to="/citas" className="volver-link">← Volver a la lista de citas</Link>
        </div>
    );
}

export default CitaDetalle;
