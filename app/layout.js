import './globals.css';
import LayoutShell from '@/components/LayoutShell';
import MouseGlow from '@/components/MouseGlow';

const siteUrl = 'https://final-rouge-theta.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Stellavia Construction | Premium Flats & Apartments',
    template: '%s | Stellavia Construction',
  },

  description:
    'Stellavia builds premium residential flats and apartments with modern design, luxury positioning, and strong construction trust.',

  keywords: [
    'Stellavia Construction',
    'Ahmedabad flats',
    'luxury apartments',
    'residential builder',
    'floor plans',
    'premium apartments Ahmedabad',
  ],

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: '/favicon.ico?v=3',
        sizes: 'any',
      },
      {
        url: '/icon.png?v=3',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    shortcut: '/favicon.ico?v=3',
    apple: '/apple-touch-icon.png?v=3',
  },

  openGraph: {
    title: 'Stellavia Construction',
    description:
      'Premium residential flats and apartments designed for modern living.',
    url: siteUrl,
    siteName: 'Stellavia Construction',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stellavia Construction Premium Apartments',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Stellavia Construction',
    description:
      'Premium residential flats and apartments designed for modern living.',
    images: ['/og-image.jpg'],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Stellavia Construction',
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  image: `${siteUrl}/og-image.jpg`,
  description:
    'Stellavia builds premium residential flats and apartments with modern design, luxury positioning, and strong construction trust.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <MouseGlow />

        <LayoutShell>{children}</LayoutShell>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919999999999?text=Hello%20Stellavia%2C%20I%20am%20interested%20in%203BHK%20flat."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            position: 'fixed',
            right: '24px',
            bottom: '24px',
            width: '62px',
            height: '62px',
            borderRadius: '50%',
            background: '#25D366',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2147483647,
            boxShadow: '0 14px 35px rgba(37, 211, 102, 0.42)',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 448 512"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32C101.5 32 2 131.5 2 253.9C2 293.1 12.2 331.3 31.6 365L0 480L117.7 449.1C150.2 466.8 186.8 476.1 223.8 476.1H223.9C346.2 476.1 448 376.6 448 254.2C448 194.9 422.8 139.1 380.9 97.1ZM223.9 438.7C190.9 438.7 158.6 429.8 130.5 413L123.8 409L54 427.3L72.6 359.2L68.2 352.2C49.8 322.9 40.1 288.9 40.1 253.9C40.1 152.5 122.6 70 224 70C273.1 70 319.3 89.2 354 123.9C388.7 158.6 409.9 204.8 409.9 254.1C409.8 355.6 325.3 438.7 223.9 438.7ZM324.7 300.4C319.2 297.6 292.1 284.3 287 282.4C281.9 280.5 278.2 279.6 274.5 285.2C270.8 290.7 260.2 303.2 257 306.9C253.8 310.6 250.6 311.1 245.1 308.3C212.5 292 191.1 279.2 169.6 242.3C163.9 232.5 175.3 233.2 185.9 212C187.7 208.3 186.8 205.1 185.4 202.3C184 199.5 172.9 172.4 168.3 161.4C163.8 150.7 159.2 152.2 155.8 152C152.6 151.8 148.9 151.8 145.2 151.8C141.5 151.8 135.5 153.2 130.4 158.8C125.3 164.3 111 177.8 111 205.3C111 232.8 130.9 259.3 133.7 263C136.5 266.7 172.8 322.6 228.6 346.6C263.9 361.8 277.7 363.1 295.8 360.4C306.8 358.8 328.4 347 333 333.9C337.6 320.8 337.6 309.6 336.2 307.3C334.9 304.8 330.2 303.1 324.7 300.4Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
