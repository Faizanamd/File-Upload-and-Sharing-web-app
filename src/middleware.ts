import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const publicPath = pathname === '/login' || pathname === '/signup' || pathname === '/';
    const token = request.cookies.get("token");

    if (!token && !publicPath) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (token && publicPath) {
        return NextResponse.redirect(new URL('/dashboard/files', request.url));
    }
    
    // If token is present and the path is not public, allow the request to continue
    // return request;
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/login/',
        '/signup/',
        '/dashboard/',
        '/dashboard/favourites',
        '/dashboard/files',
        '/dashboard/trash',

    ],
}
