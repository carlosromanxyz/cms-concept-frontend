import { NextResponse } from "next/server";

export function middleware() {
    const response = NextResponse.next();

    // Configurar Content Security Policy (CSP)
    response.headers.set(
        "Content-Security-Policy",
        "frame-ancestors 'self' http://localhost:1337"
    );

    return response;
}

// Aplica el middleware en todas las rutas
export const config = {
    matcher: ["/:path*"],
};
