import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/partidos');
  }, []);

  return null; // o un loader mientras redirige
}
