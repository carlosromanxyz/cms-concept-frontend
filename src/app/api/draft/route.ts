import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const status = searchParams.get("status");
  const environment = process.env.NODE_ENV;

  // Enable or disable draft mode
  const draft = await draftMode();
  if (status === "published" || environment === "production") {
    draft.disable();
  } else {
    draft.enable();
  }

  // Check if the URL is valid
  if (!url || !url.startsWith("/")) {
    return new Response("Invalid URL", { status: 400 });
  }

  // Redirect to the preview URL
  return redirect(url);
}
