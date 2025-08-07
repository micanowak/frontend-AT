'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import styles from '../styles/Eqiupos.module.css';

export default function Equipos() {
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

  return (
    <div className={styles.contenedor}>
      <Navbar />

      <h1 className={styles.titulo}>
        👥 Equipos - <span style={{ textTransform: 'capitalize' }}>{categoriaSeleccionada}</span>
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

      <ul className={styles.listaEquipos}>
        {equipos.map((e) => (
          <li key={e.id}>{e.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
