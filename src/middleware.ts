import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line import/no-unused-modules
export function middleware(request: NextRequest) {

  const requestHeaders = new Headers(request.headers);

  requestHeaders.set('x-path', request.nextUrl.pathname);

  const protectedPaths = ['/dashboard', '/new'];

  if(protectedPaths.includes(request.nextUrl.pathname) && !request.cookies.get('REFRESH_TOKEN')) {
    requestHeaders.set('x-redirect', request.nextUrl.pathname);
    return NextResponse.redirect(`${request.nextUrl.origin}/login`);
  }

  if(['/login', '/register'].includes(request.nextUrl.pathname) && request.cookies.get('REFRESH_TOKEN')) {

    const redirect = requestHeaders.get('x-redirect');
    const url = request.nextUrl.clone();

    if(redirect) url.pathname = redirect;
    else url.pathname = '/dashboard';

    return NextResponse.redirect(url.href);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}