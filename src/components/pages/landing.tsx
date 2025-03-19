import { getLandingContentBySlug } from "@/data/landings";
import { draftMode } from "next/headers"
import DynamicZone from "../organisms/dynamic-zone";

interface ILanding {
  slug: string;
}

export default async function LandingPage({ slug }: ILanding) {
  const isDraftMode = (await draftMode()).isEnabled;
  const content = await getLandingContentBySlug(slug, isDraftMode);
  const pageTitle = content.title;

  if (!content) {
    return <div>{'Error al cargar el contenido de la página.'}</div>;
  }

  return (
    <main className="bg-black text-white py-24 font-[family:var(--font-montserrat)]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">
          {pageTitle}
        </h1>
        
        <DynamicZone components={[
          ...content.content,
        ]} />

        {isDraftMode && (
          <p className="text-blue-500">Draft Mode</p>
        )}
      </div>
    </main>
  )
}
