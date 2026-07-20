import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-darkGray text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contacto */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">Contacto</h3>
          <a href="tel:+50312345678" className="flex items-center space-x-2 hover:text-primaryRed transition-colors">
            <Phone size={20} />
            <span>+503 1234 5678</span>
          </a>
          <a href="mailto:info@opticanuevaimagen.com" className="flex items-center space-x-2 hover:text-primaryRed transition-colors">
            <Mail size={20} />
            <span>info@opticanuevaimagen.com</span>
          </a>
          <a href="#ubicacion" className="flex items-center space-x-2 hover:text-primaryRed transition-colors">
            <MapPin size={20} />
            <span>Plaza Palmeras, Local 12, Lourdes, Colón, La Libertad</span>
          </a>
        </div>

        {/* Horario */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">Horario</h3>
          <p>Lunes – Viernes: 9:00 – 19:00</p>
          <p>Sábados: 9:00 – 14:00</p>
          <p>Domingos: Cerrado</p>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold">Síguenos</h3>
          <div className="flex space-x-4 text-sm font-medium">
            <Link href="https://wa.link/p4j93v" target="_blank" rel="noopener noreferrer"
              className="px-3 py-1 border border-white/30 rounded-full hover:bg-primaryRed hover:border-primaryRed transition-colors">
              WhatsApp
            </Link>
            <Link href="#" className="px-3 py-1 border border-white/30 rounded-full hover:bg-primaryRed hover:border-primaryRed transition-colors">
              Facebook
            </Link>
            <Link href="#" className="px-3 py-1 border border-white/30 rounded-full hover:bg-primaryRed hover:border-primaryRed transition-colors">
              Instagram
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Óptica Nueva Imagen. Todos los derechos reservados.
      </div>
    </footer>
  );
}
