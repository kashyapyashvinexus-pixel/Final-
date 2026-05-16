import StellaviaAboutLanding from '@/components/StellaviaAboutLanding';

const siteUrl = 'https://final-rouge-theta.vercel.app';
const pageUrl = `${siteUrl}/landing-page`;

export const metadata = {
  title: 'Premium 3 BHK Homes in Khoraj, Gandhinagar | Stellavia',
  description:
    'Discover Stellavia premium 3 BHK homes in Khoraj, Gandhinagar with only 2 flats per floor, column-less planning, spacious bedrooms, RERA certification and practical luxury.',
  keywords: [
    '3 BHK flats in Khoraj',
    '3 BHK homes in Gandhinagar',
    'premium flats in Gandhinagar',
    'Stellavia',
    'residential project in Khoraj',
    'RERA certified project Gandhinagar',
    '2 flats per floor homes',
    'column less flats',
    'premium apartments near Ahmedabad',
  ],
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Premium 3 BHK Homes in Khoraj, Gandhinagar | Stellavia',
    description:
      'Built for life, not just living. Explore Stellavia premium 3 BHK homes with practical luxury, better privacy, smart planning and trusted delivery.',
    url: pageUrl,
    siteName: 'Stellavia',
    images: [
      {
        url: `${siteUrl}/img/about-building.webp`,
        width: 1200,
        height: 630,
        alt: 'Stellavia Premium 3 BHK Homes in Khoraj Gandhinagar',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium 3 BHK Homes in Khoraj, Gandhinagar | Stellavia',
    description:
      'Premium 3 BHK homes with only 2 flats per floor, column-less planning and practical luxury.',
    images: [`${siteUrl}/img/about-building.webp`],
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Stellavia',
      url: siteUrl,
      logo: `${siteUrl}/logo-mark.svg`,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Stellavia',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}/#webpage`,
      url: pageUrl,
      name: 'Premium 3 BHK Homes in Khoraj, Gandhinagar | Stellavia',
      description:
        'Stellavia offers premium 3 BHK homes in Khoraj, Gandhinagar with practical luxury, smart planning, better privacy and trusted delivery.',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
      about: {
        '@id': `${siteUrl}/#residentialproject`,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${siteUrl}/img/about-building.webp`,
      },
    },
    {
      '@type': 'ApartmentComplex',
      '@id': `${siteUrl}/#residentialproject`,
      name: 'Stellavia Premium 3 BHK Homes',
      url: pageUrl,
      image: [
        `${siteUrl}/img/about-building.webp`,
        `${siteUrl}/img/project-night.webp`,
      ],
      description:
        'Premium 3 BHK residential homes at Khoraj, Gandhinagar designed with only 2 flats per floor, column-less planning, spacious bedrooms, dedicated dining area and better privacy.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Khoraj',
        addressRegion: 'Gandhinagar',
        addressCountry: 'IN',
      },
      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Only 2 flats per floor',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Column-less planning',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Zero wasted space',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Dedicated dining area',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Better privacy and ventilation',
          value: true,
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'RERA certified project',
          value: true,
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Premium 3 BHK Homes',
          item: pageUrl,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where is Stellavia located?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Stellavia is located at Khoraj, Gandhinagar, with strategic connectivity to key roads, schools, hospitals and commercial hubs.',
          },
        },
        {
          '@type': 'Question',
          name: 'What type of homes does Stellavia offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Stellavia offers premium 3 BHK homes designed with practical luxury, spacious bedrooms, dedicated dining area and smart planning.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes Stellavia different?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Stellavia stands apart with only 2 flats per floor, column-less planning, zero wasted space, better privacy and ventilation, and RERA certification.',
          },
        },
      ],
    },
  ],
};

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <main>
        <StellaviaAboutLanding />
      </main>
    </>
  );
}
