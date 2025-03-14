import LandingPage from '@/components/pages/landing'

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  return <LandingPage slug={slug} />
}
