import { draftMode } from "next/headers";
import { getHomePageContent } from "@/data/homepage";
import Hero from "../molecules/hero";
import CloseDraftMode from "../atoms/close-draft-mode";

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
      <main className="h-screen bg-black flex text-white items-center">
        <div className="container mx-auto px-4">
          <Hero
            imageSrc={heroImageUrl}
            imageAlt={imageAlt}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
          />
          {isDraftMode && (
            <CloseDraftMode />
          )}
        </div>
      </main>
    );
}
