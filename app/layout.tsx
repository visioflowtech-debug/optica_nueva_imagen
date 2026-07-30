import type { Metadata } from 'next';
import { Manrope, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const display = Manrope({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://opticanuevaimagen.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Óptica Nueva Imagen — Óptica en Lourdes, Colón | Exámenes visuales y lentes',
    template: '%s | Óptica Nueva Imagen',
  },
  description:
    'Óptica en Lourdes, Colón, La Libertad. Exámenes visuales computarizados, armazones, lentes de contacto y reparación. Más de 12 años de experiencia. Agenda tu cita por WhatsApp.',
  keywords: [
    'óptica en Lourdes Colón',
    'óptica La Libertad El Salvador',
    'examen visual computarizado',
    'lentes de contacto El Salvador',
    'armazones para toda la familia',
    'Óptica Nueva Imagen',
  ],
  applicationName: 'Óptica Nueva Imagen',
  authors: [{ name: 'Óptica Nueva Imagen' }],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'es_SV',
    url: '/',
    siteName: 'Óptica Nueva Imagen',
    title: 'Óptica Nueva Imagen — Cuidado visual de confianza en Lourdes, Colón',
    description:
      'Exámenes visuales computarizados, armazones y lentes de contacto. Agenda tu cita por WhatsApp.',
    images: [{ url: '/images/hero.webp', width: 1200, height: 900, alt: 'Óptica Nueva Imagen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Óptica Nueva Imagen',
    description: 'Cuidado visual de confianza en Lourdes, Colón, La Libertad.',
    images: ['/images/hero.webp'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  themeColor: '#1a5f8a',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Optician',
  name: 'Óptica Nueva Imagen',
  image: `${SITE_URL}/images/hero.webp`,
  '@id': SITE_URL,
  url: SITE_URL,
  telephone: '+50325629435',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plaza Palmeras, Local 12, Contiguo a Correos, Banco Agrícola y Super Selectos',
    addressLocality: 'Lourdes, Colón',
    addressRegion: 'La Libertad',
    addressCountry: 'SV',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:30',
      closes: '17:00',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-surface text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
