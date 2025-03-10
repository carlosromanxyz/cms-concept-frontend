import { NextResponse, NextRequest } from "next/server";

export function middleware( request: NextRequest ) {
    const response = NextResponse.next();

    // Configurar Content Security Policy (CSP)
    response.headers.set(
        "Content-Security-Policy",
        "frame-ancestors 'self' http://localhost:1337"
    );

    // Detectar el modo de vista previa en la URL
    const isPreview = request.nextUrl.searchParams.get("preview") === "true";
    const url = request.nextUrl.searchParams.get("url") || "/";

    if (isPreview) {
        // Habilitar el modo de vista previa mediante cookie
        response.cookies.set("next.draftMode", "1", { path: "/" });

        // Redirigir a la URL de vista previa sin el parámetro
        const previewUrl = new URL(url, request.url);
        return NextResponse.redirect(previewUrl);
    }

    return response;
}

// Aplica el middleware en todas las rutas
export const config = {
    matcher: ["/:path*"],
};
