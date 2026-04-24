import HomePageClient from '@/components/HomePageClient';
import StructuredData from '@/components/StructuredData';

export default function HomePage() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Stellavia Construction',
    url: 'https://stellavia.vercel.app',
    logo: 'https://stellavia.vercel.app/logo-mark.svg',
    sameAs: ['https://www.instagram.com/', 'https://www.linkedin.com/'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      addressCountry: 'IN'
    }
  };

  return (
    <>
      <StructuredData data={data} />
      <HomePageClient />
    </>
  );
}
