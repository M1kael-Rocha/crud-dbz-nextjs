import { NextRequest, NextResponse } from 'next/server';
import { validateSession } from './app/lib/session';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

const publicRoutes = ['/', '/login', '/create'];

export async function middleware(req) {
  const pathname = req.nextUrl.pathname;
  const statusSession = await validateSession();

  if (publicRoutes.includes(pathname) && statusSession) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
  }

  if (!publicRoutes.includes(pathname) && !statusSession) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  return NextResponse.next();
}
