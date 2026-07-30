import { BUSINESS } from '@/lib/business';

export default function Location() {
  return (
    <section id="ubicacion" className="bg-surfaceAlt py-20 px-4">
      <div className="max-w-6xl mx-auto flex items-center gap-14 flex-wrap-reverse">
        <div className="flex-1 min-w-[300px]">
          <iframe
            title="Ubicación Óptica Nueva Imagen"
            src={BUSINESS.mapsEmbedSrc}
            className="w-full h-[360px] border-0 rounded-[18px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex-1 min-w-[300px]">
          <span className="text-brand-dark font-bold text-sm tracking-wide uppercase">Ubicación</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-2 mb-5 text-ink">Visítanos</h2>
          <div className="flex flex-col gap-4 text-base">
            <div><strong className="text-ink">Dirección:</strong> <span className="text-inkMuted">{BUSINESS.address}</span></div>
            <div><strong className="text-ink">Horario:</strong> <span className="text-inkMuted">{BUSINESS.hours}</span></div>
            <div>
              <strong className="text-ink">Teléfono:</strong>{' '}
              <a href={`tel:${BUSINESS.phoneNumber}`} className="text-brand-dark hover:underline">{BUSINESS.phoneDisplay}</a>
            </div>
          </div>
          <a
            href={BUSINESS.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-white text-brand-dark border-[1.5px] border-borderSoft px-6 py-3 rounded-lg font-bold text-sm hover:border-brand transition-all"
          >
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  );
}
