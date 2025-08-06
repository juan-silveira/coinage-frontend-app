import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';
import {locales, defaultLocale} from '@/config';

export default async function middleware(request: NextRequest) {
  // Skip internationalization for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Redirecionar rotas limpas para o locale padrão
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  if (pathname === '/login') {
    return NextResponse.redirect(new URL(`/${defaultLocale}/auth/login`, request.url));
  }

  // Step 1: Use the incoming request (example)
  const locale = request.headers.get('dashcode-locale') || defaultLocale;
 
  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
    // Configurar para não mostrar locale na URL
    localePrefix: 'never'
  });
  const response = handleI18nRouting(request);
 
  // Step 3: Alter the response (example)
  response.headers.set('dashcode-locale', locale);

  return response;
}
 
export const config = {
  // Match only internationalized pathnames, exclude API routes
  matcher: ['/', '/login', '/(pt-BR|en|es)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};