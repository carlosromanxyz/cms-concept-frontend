import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const environment = process.env.NODE_ENV;

  // First check if we are in development
  if (environment === "development") { // Available ONLY in development mode
    // Set Content-Security-Policy header to allow iframe embedding on Strapi Admin
    response.headers.set(
      "Content-Security-Policy",
      "frame-ancestors 'self' http://localhost:1337"
    );
  }

  // Si la URL termina en "/preview", redirigir a "/api/draft"
  if (request.nextUrl.pathname.endsWith("/preview")) {
    let cleanPath = request.nextUrl.pathname.replace("/preview", "");

    // Si la URL original era "/", asegurarse de que cleanPath sea "/"
    if (cleanPath === "") {
        cleanPath = "/";
    }

    // Obtener el estado de la URL (draft por defecto)
    const status = request.nextUrl.searchParams.get("status") || "draft";

    // Construir la URL absoluta con status
    const draftUrl = `${request.nextUrl.origin}/api/draft?url=${cleanPath}&status=${status}`;
    
    console.log(`Redirecting to: ${draftUrl}`);

    return NextResponse.redirect(draftUrl);
  }

  return response;
}

// Configuración del middleware
export const config = {
    matcher: ["/:path*/preview"],
};
