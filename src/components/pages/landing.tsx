import { draftMode } from "next/headers"

export default async function LandingPage() {
  const isDraftMode = (await draftMode()).isEnabled;
  return (
    <main className="h-screen bg-black text-white flex justify-center items-center">
      <div className="block">
        <h1 className="text-4xl font-bold">Landing Page</h1>
        {isDraftMode && (
          <p className="text-blue-500">Draft Mode</p>
        )}
      </div>
    </main>
  )
}
