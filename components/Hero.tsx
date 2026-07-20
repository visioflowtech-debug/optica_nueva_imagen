import { Calendar, ChevronRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1B3A4B 0%, #0F2535 55%, #162D3D 100%)',
      }}
    >
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #C9973A, transparent)' }} />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #6A8CA3, transparent)' }} />
        {/* Subtle wave lines */}
        <svg className="absolute bottom-0 left-0 w-full opacity-5" viewBox="0 0 1440 200" fill="none">
          <path d="M0 100 Q360 0 720 100 Q1080 200 1440 100 L1440 200 L0 200 Z" fill="#C9973A"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-gold/40"
          style={{ background: 'rgba(201,151,58,0.15)' }}>
          <Sparkles size={14} className="text-gold" />
          <span className="text-gold text-sm font-medium">Más de 15 años cuidando tu visión</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 max-w-3xl">
          <span className="text-white">Ve el mundo con </span>
          <br />
          <span style={{ color: '#C9973A' }}>claridad y estilo</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-xl max-w-xl mb-10 leading-relaxed" style={{ color: '#93B4C8' }}>
          Exámenes visuales completos, aros de diseñador y lentes de contacto.
          Todo en un mismo lugar, con los mejores especialistas.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#agenda"
            className="inline-flex items-center justify-center gap-3 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            style={{ background: '#C9973A' }}
          >
            <Calendar size={18} />
            Agenda tu examen visual
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 hover:-translate-y-1 transition-all"
          >
            Ver servicios
            <ChevronRight size={18} />
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #F0F4F8)' }} />
    </section>
  );
}
