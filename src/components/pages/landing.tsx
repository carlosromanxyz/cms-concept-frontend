import { getLandingContentBySlug } from "@/data/landings";
import { draftMode } from "next/headers"
import DynamicZone from "../organisms/dynamic-zone";

interface ILanding {
  slug: string;
}

export default async function LandingPage({ slug }: ILanding) {
  const isDraftMode = (await draftMode()).isEnabled;
  const components = await getLandingContentBySlug(slug);
  console.log(components);
  return (
    <main className="bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">Landing Page</h1>
        <DynamicZone components={components} />
        {isDraftMode && (
          <p className="text-blue-500">Draft Mode</p>
        )}
      </div>
    </main>
  )
}
