import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname == '/marketplace') {
    return NextResponse.redirect('/marketplace/inventory');
  }
  return NextResponse.next();
}
