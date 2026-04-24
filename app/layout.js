import './globals.css';
import LayoutShell from '@/components/LayoutShell';
import MouseGlow from '@/components/MouseGlow';

export const metadata = {
  metadataBase: new URL('https://stellavia.vercel.app'),
  title: {
    default: 'Stellavia Construction | Premium Flats & Apartments',
    template: '%s | Stellavia Construction'
  },
  description: 'Stellavia builds premium residential flats and apartments with modern design, luxury positioning, and strong construction trust.',
  keywords: ['Stellavia Construction', 'Ahmedabad flats', 'luxury apartments', 'residential builder', 'floor plans'],
  openGraph: {
    title: 'Stellavia Construction',
    description: 'Premium residential flats and apartments designed for modern living.',
    url: 'https://stellavia.vercel.app',
    siteName: 'Stellavia Construction',
    images: [{ url: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80' }],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stellavia Construction',
    description: 'Premium residential flats and apartments designed for modern living.'
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MouseGlow />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
