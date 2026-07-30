import { Phone, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import { BUSINESS } from '@/lib/business';

const links = [
  { label: 'Nosotros',  href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Agenda tu cita', href: '#agenda' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display font-extrabold text-lg mb-4">Óptica Nueva Imagen</p>
          <p className="text-sm text-white/60 leading-relaxed">
            Más de 12 años cuidando la visión de nuestros pacientes con tecnología y calidez humana.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">Navegación</h3>
          <ul className="flex flex-col gap-2">
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">Contacto</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a href={BUSINESS.whatsappHref} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>WhatsApp: {BUSINESS.phoneDisplay}</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/70">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <span>{BUSINESS.address}</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/70">
              <Clock size={16} className="mt-0.5 flex-shrink-0" />
              <span>{BUSINESS.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-4 flex flex-col md:flex-row items-center justify-between gap-2 max-w-6xl mx-auto">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Óptica Nueva Imagen. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
