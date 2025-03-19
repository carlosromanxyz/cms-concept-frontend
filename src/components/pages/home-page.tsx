import { draftMode } from "next/headers";
import { getHomePageContent } from "@/data/homepage";
import Hero from "../molecules/hero";
import CloseDraftMode from "../atoms/close-draft-mode";
import Link from "next/link";

export default async function HomePage() {
    const isDraftMode = (await draftMode()).isEnabled;
    const assetPath = process.env.NEXT_PUBLIC_ASSETS_PATH;
    const content = await getHomePageContent(isDraftMode);

    if (!content) {
      return <div>{'Error al cargar el contenido de la página principal.'}</div>;
    }

    const heroImageUrl = `${assetPath}${content.hero.image.url}`;
    const imageAlt = content.hero.image.alternativeText;
    const imageWidth = content.hero.image.width;
    const imageHeight = content.hero.image.height;

    return (
      <main className="bg-black text-white">
        <Hero
          imageSrc={heroImageUrl}
          imageAlt={imageAlt}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          heading={content.hero.heading}
          title={content.hero.title}
        />
        {isDraftMode && (
          <CloseDraftMode />
        )}

        <section className="py-10">
          <div className="container px-4 mx-auto grid grid-cols-2 gap-4">
            <Link href={'/landing/cambiate-a-uno-y-aumenta-tu-sueldo'} className="bg-gray-500 text-white text-center block p-5 rounded-lg font-bold uppercase">
              {'Ver landing con slug'}
            </Link>
            <Link href={'/landing/landing-inexistente'} className="bg-gray-500 text-white text-center block p-5 rounded-lg font-bold uppercase">
              {'Ver landing sin slug'}
            </Link>
          </div>
        </section> 
      </main>
    );
}
