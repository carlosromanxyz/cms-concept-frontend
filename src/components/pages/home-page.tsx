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
      </main>
    );
}
