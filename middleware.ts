import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Desabilitado temporariamente para evitar erro de build
  return NextResponse.next();
} 