import { getHeaderContent } from "@/data/header";
import { draftMode } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  const isDraftMode = (await draftMode()).isEnabled;
  const assetsPath = process.env.NEXT_PUBLIC_ASSETS_PATH;
  const content = await getHeaderContent(isDraftMode);
  const logoUrl = `${assetsPath}${content.logo.image.url}`;
  const navigationItems = content.navigation;
  const cta = content.cta;
  return (
    <header className="fixed top-0 left-0 right-0 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="block">
          <Image
            src={logoUrl}
            alt={content.logo.alternativeText || 'Alternative text for logo'}
            width={content.logo.image.width}
            height={content.logo.image.height}
          />
        </Link>

        <div className="flex justify-end items-center gap-4">
          {navigationItems.map((item: {url: string, text: string}, index: number) => (
            <Link href={item.url} key={index} className="text-white">
              {item.text}
            </Link>
          ))}

          {cta && (
            <Link
              href={cta.url}
              className="bg-primary text-white px-4 py-2 rounded-lg"
            >
              {cta.text}
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
