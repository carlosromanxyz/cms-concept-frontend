import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const draft = await draftMode();
  draft.disable();
  console.log("Exiting draft mode");
  
  // Return a JSON response
  return NextResponse.json({ success: true });
}