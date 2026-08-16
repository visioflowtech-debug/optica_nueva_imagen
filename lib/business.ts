// Single source of truth for real business data — keep every component in sync.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nuevaimagen.shop';

export const BUSINESS = {
  name: 'Óptica Nueva Imagen',
  phoneDisplay: '+503 2562 9435',
  phoneNumber: '+50325629435',
  whatsappHref: 'https://wa.me/50325629435',
  address: 'Plaza Palmeras, Local 12, Contiguo a Correos, Banco Agrícola y Super Selectos, Lourdes, Colón, La Libertad',
  mapsEmbedSrc: 'https://www.google.com/maps?q=Plaza+Palmeras+Local+12+Lourdes+Colon+La+Libertad+El+Salvador&output=embed',
  mapsLink: 'https://maps.app.goo.gl/oq2bB8ymmhU3ogta7',
  hours: 'Lun–Sáb, 8:30 a.m. – 5:00 p.m.',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61554956325320',
  instagramUrl: 'https://www.instagram.com/optica.nueva.imagensv/',
  tiktokUrl: 'https://www.tiktok.com/@optica.nueva.imagensv',
  stats: [
    { value: '12+', label: 'años de experiencia' },
    { value: '8,000+', label: 'pacientes atendidos' },
    { value: '4.9★', label: 'valoración en Google' },
  ],
} as const;

export function whatsappHrefWithMessage(message: string) {
  return `https://wa.me/50325629435?text=${encodeURIComponent(message)}`;
}
