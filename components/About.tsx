import Image from 'next/image';
import { BUSINESS } from '@/lib/business';

export default function About() {
  return (
    <section id="nosotros" className="bg-surfaceAlt py-20 px-4">
      <div className="max-w-6xl mx-auto flex items-center gap-14 flex-wrap">
        <div className="flex-1 min-w-[300px]">
          <Image
            src="/images/nosotros.webp"
            alt="Equipo de diagnóstico visual en Óptica Nueva Imagen"
            width={600}
            height={480}
            className="w-full h-[360px] object-cover rounded-[18px] shadow-lg"
          />
        </div>
        <div className="flex-1 min-w-[320px]">
          <span className="text-brand-dark font-bold text-sm tracking-wide uppercase">Sobre nosotros</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-2 mb-4 text-ink">
            Más de una década cuidando la vista de nuestro barrio
          </h2>
          <p className="text-lg leading-relaxed text-inkMuted mb-7">
            Somos una óptica local, cercana y profesional. Combinamos tecnología de diagnóstico
            con un trato humano: te conocemos por tu nombre, no por un número de ticket.
          </p>
          <div className="grid grid-cols-3 gap-5">
            {BUSINESS.stats.map(s => (
              <div key={s.label}>
                <div className="font-display font-extrabold text-3xl text-brand-dark">{s.value}</div>
                <div className="text-sm text-inkMuted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
