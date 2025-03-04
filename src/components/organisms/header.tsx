import { getHeaderContent } from "@/data/header";

interface IHeader {
  data: {
    logo: {
      url: string;
      alternativeText: string;
    };
    navigation: {
      id: number;
      text: string;
      slug: string;
    }[];
    cta: {
      buttonText: string;
      buttonLink: string;
    }
  } | null;
}

export default async function Header() {
  const content: IHeader = await getHeaderContent();
  console.log(content.data);
  return (
    <header className="fixed top-0 left-0 right-0">
      <div className="container mx-auto px-4">

      </div>
    </header>
  )
}
