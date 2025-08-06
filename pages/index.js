import { useEffect, useState } from 'react';

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // LOCAL: localhost:3001
    // PRODUCCIÓN: tomará desde variable de entorno
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

    fetch(`${baseUrl}/api/usuarios`)
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error('Error al traer usuarios:', err));
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nombre} - {usuario.email} ({usuario.categoria})
          </li>
        ))}
      </ul>
    </div>
  );
}
