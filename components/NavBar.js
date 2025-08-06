import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>🏑 Torneo Mendoza</div>
      <div className={styles.links}>
        <Link href="/"><span>Partidos</span></Link>
        <Link href="/tabla"><span>Tabla</span></Link>
        <Link href="/equipos"><span>Equipos</span></Link>
      </div>
    </nav>
  );
}
