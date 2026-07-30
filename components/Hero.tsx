import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import { BUSINESS } from '@/lib/business';

export default function Hero() {
  return (
    <section id="inicio" className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex items-center gap-14 flex-wrap">
      <div className="flex-1 min-w-[320px]">
        <div className="inline-block bg-brand-light text-brand-dark font-semibold text-sm px-4 py-1.5 rounded-full mb-5">
          Cuidado visual de confianza en tu barrio
        </div>
        <h1 className="font-display font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-5 text-ink">
          Tu visión, cuidada con calidez y precisión
        </h1>
        <p className="text-lg leading-relaxed text-inkMuted mb-8 max-w-md">
          Examen visual computarizado, armazones para toda la familia y atención personalizada
          de quienes conocen tu barrio hace años.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href={BUSINESS.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand text-white font-bold px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl hover:bg-brand-dark hover:-translate-y-0.5 transition-all"
          >
            <Calendar size={18} />
            Agendar examen visual
          </a>
          <a
            href="#ubicacion"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-dark border-[1.5px] border-borderSoft font-bold px-7 py-3.5 rounded-lg hover:border-brand hover:-translate-y-0.5 transition-all"
          >
            <MapPin size={18} />
            Ver ubicación
          </a>
        </div>
      </div>
      <div className="flex-1 min-w-[320px]">
        <Image
          src="/images/hero.webp"
          alt="Local de Óptica Nueva Imagen en Plaza Palmeras, Lourdes, Colón"
          width={640}
          height={480}
          className="w-full h-[420px] object-cover rounded-[20px] shadow-xl"
          priority
        />
      </div>
    </section>
  );
}
