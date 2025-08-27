import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Citas from './pages/Citas';
import CitaDetalle from './pages/CitaDetalle';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/citas" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Ver Citas
            </NavLink>
          </li>
          <li>
            <NavLink to="/cita/1" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Cita de Ejemplo
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/cita/:id" element={<CitaDetalle />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;