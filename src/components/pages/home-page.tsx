import { getHomePageContent } from "@/data/homepage"

export default async function HomePage() {
  const content = await getHomePageContent();
  // console.log(content);
  return (
    <main className='h-screen bg-black flex text-white items-center'>
      <div className='container mx-auto px-4'>
        HomePage
      </div>
    </main>
  )
}
