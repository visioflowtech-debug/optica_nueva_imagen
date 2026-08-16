import { BUSINESS, whatsappHrefWithMessage } from '@/lib/business';

const PREFILLED_MESSAGE = 'Hola, quiero agendar una cita en Óptica Nueva Imagen.';

export default function Booking() {
  return (
    <section id="agenda" className="py-16 px-4 bg-surfaceAlt">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink mb-3">
          Agenda tu cita
        </h2>
        <p className="text-inkMuted text-lg mb-8 max-w-md mx-auto">
          Un clic y listo: escríbenos por WhatsApp y te confirmamos el horario disponible al instante.
        </p>

        <div className="bg-white rounded-3xl shadow-lg border border-borderSoft px-8 py-10 flex flex-col items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-whatsapp/10 flex items-center justify-center">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-whatsapp" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.24-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z"/>
            </svg>
          </div>

          <a
            href={whatsappHrefWithMessage(PREFILLED_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-whatsapp text-white font-bold text-lg px-10 py-4 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:brightness-105 transition-all"
          >
            Agendar por WhatsApp
          </a>

          <p className="text-sm text-inkMuted">
            {BUSINESS.phoneDisplay} · {BUSINESS.hours}
          </p>
        </div>
      </div>
    </section>
  );
}
