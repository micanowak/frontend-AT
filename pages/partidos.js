import { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import styles from '../styles/Partidos.module.css';

export default function Partidos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('mamis');
  const [diaSeleccionado, setDiaSeleccionado] = useState('');
  const [partidos, setPartidos] = useState([]);
  const [equipos, setEquipos] = useState([]);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

  useEffect(() => {
    fetch(`${baseUrl}/api/partidos`)
      .then((res) => res.json())
      .then((data) =>
        setPartidos(data.filter((p) => p.categoria === categoriaSeleccionada))
      );

    fetch(`${baseUrl}/api/equipos`)
      .then((res) => res.json())
      .then((data) =>
        setEquipos(data.filter((e) => e.categoria === categoriaSeleccionada))
      );
  }, [categoriaSeleccionada]);

  const partidosFiltrados = partidos.filter(
    (p) => diaSeleccionado === '' || p.dia === diaSeleccionado
  );

  return (
    <div className={styles.contenedor}>
      <Navbar />

      <h1 className={styles.titulo}>
        📅 Partidos por venir — <span style={{ textTransform: 'capitalize' }}>{categoriaSeleccionada}</span>
      </h1>

      <div>
        <button
          className={styles.botonCategoria}
          onClick={() => setCategoriaSeleccionada('mamis')}
        >
          Mamis
        </button>
        <button
          className={styles.botonCategoria}
          onClick={() => setCategoriaSeleccionada('libres')}
        >
          Libres
        </button>
      </div>

      <div style={{ marginTop: '16px' }}>
        <label>Filtrar por día: </label>
        <select
          value={diaSeleccionado}
          onChange={(e) => setDiaSeleccionado(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="1">Día 1</option>
          <option value="2">Día 2</option>
          <option value="3">Día 3</option>
        </select>
      </div>

      <ul className={styles.lista}>
        {partidosFiltrados.length > 0 ? (
          partidosFiltrados.map((p) => {
            const equipo1 = equipos.find((e) => e.id === p.idEqui1)?.nombre || 'Equipo 1';
            const equipo2 = equipos.find((e) => e.id === p.idEqui2)?.nombre || 'Equipo 2';
            return (
              <li key={p.id}>
                Día {p.dia} - {p.hora} hs - Cancha {p.cancha} <br />
                {equipo1} vs {equipo2}
              </li>
            );
          })
        ) : (
          <li>No hay partidos para este filtro.</li>
        )}
      </ul>
    </div>
  );
}
