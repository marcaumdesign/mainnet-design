import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Desabilitado temporariamente para evitar erro de build
  // const country = request.geo?.country || 'US';
  // const response = NextResponse.next();
  // response.cookies.set('user-country', country);
  // return response;
  return NextResponse.next();
} 