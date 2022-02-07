import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (['/marketplace', '/marketplace/inventory'].includes(pathname)) {
    return NextResponse.redirect('/marketplace/inventory/airdrop');
  }
  return NextResponse.next();
}
