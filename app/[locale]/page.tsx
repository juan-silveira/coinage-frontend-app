'use client';

import { useEffect } from 'react';
import { useRouter } from '@/i18n/routing';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Verificar se o usuário está autenticado
    const token = localStorage.getItem('accessToken');
    const user = localStorage.getItem('user');

    if (token && user) {
      // Se autenticado, redirecionar para a página protegida
      router.push('/(protected)');
    } else {
      // Se não autenticado, redirecionar para login
      router.push('/login');
    }
  }, [router]);

  // Mostrar loading enquanto redireciona
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
    </div>
  );
} 