'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import styles from '../styles/Tabla.module.css';

export default function Tabla() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('mamis');
  const [equipos, setEquipos] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

  useEffect(() => {
    fetch(`${baseUrl}/api/equipos`)
      .then((res) => res.json())
      .then((data) =>
        setEquipos(data.filter((e) => e.categoria === categoriaSeleccionada))
      );
  }, [categoriaSeleccionada]);

  const equiposOrdenados = [...equipos].sort((a, b) => b.pts - a.pts);

  return (
    <div className={styles.contenedor}>
      <Navbar />

      <h1 className={styles.titulo}>
        📊 Tabla de posiciones - <span style={{ textTransform: 'capitalize' }}>{categoriaSeleccionada}</span>
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

      <table className={styles.tabla}>
        <thead>
          <tr>
            <th>Equipo</th>
            <th>Pts</th>
            <th>PJ</th>
            <th>PG</th>
            <th>PE</th>
            <th>PP</th>
            <th>GF</th>
            <th>GC</th>
          </tr>
        </thead>
        <tbody>
          {equiposOrdenados.map((e) => (
            <tr key={e.id}>
              <td>{e.nombre}</td>
              <td>{e.pts}</td>
              <td>{e.pj}</td>
              <td>{e.pg}</td>
              <td>{e.pe}</td>
              <td>{e.pp}</td>
              <td>{e.gf}</td>
              <td>{e.gc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
