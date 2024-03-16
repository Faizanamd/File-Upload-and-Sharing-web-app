import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const publicPath = pathname ==='/login' || pathname ==='signup' || pathname === '/';
    const token = request.cookies.get("token");
    if(token && publicPath){
        return NextResponse.redirect( new URL('/dashboard/files', request.url));
    } 

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/login/',
        '/signup/',
        '/dashboard/'
    ],
}
