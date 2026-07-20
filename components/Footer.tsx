import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

const links = [
  { label: 'Inicio',              href: '#inicio' },
  { label: 'Agenda tu cita',      href: '#agenda' },
  { label: 'Servicios',           href: '#servicios' },
  { label: 'Preguntas frecuentes',href: '#faq' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <span className="text-white font-black text-sm">Ó</span>
            </div>
            <div>
              <p className="text-xs text-white/50 tracking-widest uppercase">Óptica</p>
              <p className="text-sm font-bold tracking-wide">NUEVA IMAGEN</p>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            Más de 15 años cuidando la visión de nuestros pacientes con tecnología y calidez humana.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">Navegación</h3>
          <ul className="flex flex-col gap-2">
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/70 hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">Contacto</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="https://wa.link/p4j93v" target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-white/70 hover:text-gold transition-colors group">
                <Phone size={16} className="mt-0.5 flex-shrink-0 group-hover:text-gold" />
                <span>WhatsApp: wa.link/p4j93v</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@opticanuevaimagen.com"
                className="flex items-start gap-3 text-sm text-white/70 hover:text-gold transition-colors group">
                <Mail size={16} className="mt-0.5 flex-shrink-0 group-hover:text-gold" />
                <span>info@opticanuevaimagen.com</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/70">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <span>Plaza Palmeras, Local 12, Lourdes, Colón, La Libertad</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/70">
              <Clock size={16} className="mt-0.5 flex-shrink-0" />
              <span>Lun–Vie: 9:00–19:00 | Sáb: 9:00–14:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 px-4 flex flex-col md:flex-row items-center justify-between gap-2 max-w-6xl mx-auto">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Óptica Nueva Imagen. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <a href="https://wa.link/p4j93v" target="_blank" rel="noopener noreferrer"
            className="text-xs text-white/40 hover:text-gold transition-colors">WhatsApp</a>
          <a href="#" className="text-xs text-white/40 hover:text-gold transition-colors">Facebook</a>
          <a href="#" className="text-xs text-white/40 hover:text-gold transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
