'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.topBar}>
        <div className={styles.logo}>🏑 Torneo Mendoza</div>
        <button
          className={styles.botonMenu}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          ☰
        </button>
      </div>

      <div className={`${styles.links} ${menuAbierto ? styles.abierto : ''}`}>
        <Link href="/" onClick={() => setMenuAbierto(false)}>
          <span>Partidos</span>
        </Link>
        <Link href="/tabla" onClick={() => setMenuAbierto(false)}>
          <span>Tabla</span>
        </Link>
        <Link href="/equipos" onClick={() => setMenuAbierto(false)}>
          <span>Equipos</span>
        </Link>
      </div>
    </nav>
  );
}
