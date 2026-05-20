// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Fungsi utama middleware
export function middleware(request: NextRequest) {
  // 1. Ambil token dari cookies
  const token = request.cookies.get('token')?.value;

  // 2. Tentukan halaman yang sedang diakses
  const { pathname } = request.nextUrl;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);

  // 3. Logika proteksi: Jika akses ke /admin tapi tidak punya token
  if (pathname.startsWith('/dashboard') && !token) {
    // Redirect ke halaman login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if(pathname.startsWith('/login') && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Lanjutkan permintaan jika valid
  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

// 4. Konfigurasi: Tentukan rute mana saja yang akan diproses middleware
export const config = {
  matcher: [
    '/login/:path*',
    '/dashboard/:path*',
  ],
};