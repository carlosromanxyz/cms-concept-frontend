import { getHomePageContent } from "@/data/homepage"
import Hero from "../molecules/hero";

export default async function HomePage() {
  const assetPath = process.env.NEXT_PUBLIC_ASSETS_PATH;
  const content = await getHomePageContent();
  const heroImageUrl = `${assetPath}${content.hero.image.url}`;
  const imageAlt = content.hero.image.alternativeText;
  const imageWidth = content.hero.image.width;
  const imageHeight = content.hero.image.height;
  console.dir(content.hero.image.url);
  return (
    <main className='h-screen bg-black flex text-white items-center'>
      <div className='container mx-auto px-4'>
        <Hero
          imageSrc={heroImageUrl}
          imageAlt={imageAlt}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
        />
      </div>
    </main>
  )
}
