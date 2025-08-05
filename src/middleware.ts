// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

// const PROTECTED = ['/(protected)', '/api/proxy'];
const PUBLIC = ['/login'];
const ALWAYS_ACCESSIBLE = ['/privacy-policy', '/terms-of-service', '/', '/robots.txt', '/sitemap.xml'];

export default function middleware(req: NextRequest) {
  const hasRefresh = req.cookies.get('refresh-token')?.value;
  const path = req.nextUrl.pathname;

  // Allow access to always accessible pages regardless of auth status
  if (ALWAYS_ACCESSIBLE.includes(path)) {
    return NextResponse.next();
  }

  // If refresh token exists and trying to access /login, redirect to /creative-analytics
  if (hasRefresh && PUBLIC.includes(path)) {
    console.log('refresh token exists, redirecting to creative analytics ✅');
    return NextResponse.redirect(new URL('/creative-analytics', req.url));
  }

  // If no refresh token and trying to access protected routes, redirect to login
  if (!hasRefresh && !PUBLIC.includes(path) && !ALWAYS_ACCESSIBLE.includes(path)) {
    console.log('no refresh token, redirecting to login ❌');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // '/(protected)/:path*', '/api/proxy/:path*',
    '/((?!api|_next|favicon\\.ico|.*\\.(?:png|jpg|jpeg|svg|webp|mp4)$).*)',
  ],
};
