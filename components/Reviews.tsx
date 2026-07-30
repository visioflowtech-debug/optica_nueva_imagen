import { Star } from 'lucide-react';
import { BUSINESS } from '@/lib/business';

// Nota: no se inventan reseñas de pacientes. En cuanto tengan capturas o enlaces
// a reseñas reales de Google, se pueden listar aquí citando la fuente.
export default function Reviews() {
  return (
    <section id="resenas" className="max-w-4xl mx-auto px-4 py-20 text-center">
      <span className="text-brand-dark font-bold text-sm tracking-wide uppercase">Reseñas</span>
      <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-2 mb-6 text-ink">
        La confianza de nuestros pacientes
      </h2>
      <div className="inline-flex flex-col items-center gap-3 bg-white border border-borderSoft rounded-2xl px-10 py-8 shadow-sm">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={22} className="fill-brand text-brand" />
          ))}
        </div>
        <p className="font-display font-extrabold text-2xl text-ink">4.9 sobre 5</p>
        <p className="text-sm text-inkMuted">Valoración de nuestros pacientes en Google</p>
        <a
          href={BUSINESS.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 bg-brand text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-brand-dark transition-all"
        >
          Leer reseñas en Google
        </a>
      </div>
    </section>
  );
}
