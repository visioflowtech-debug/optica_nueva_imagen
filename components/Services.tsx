import { ScanEye, Glasses, Droplet, Wrench } from 'lucide-react';

const services = [
  {
    icon: ScanEye,
    title: 'Examen visual computarizado',
    desc: 'Diagnóstico preciso con equipo digital y seguimiento personalizado.',
  },
  {
    icon: Glasses,
    title: 'Armazones y lentes',
    desc: 'Amplio catálogo de marcas para toda la familia y todos los estilos.',
  },
  {
    icon: Droplet,
    title: 'Lentes de contacto',
    desc: 'Adaptación y asesoría para uso diario, mensual o cosmético.',
  },
  {
    icon: Wrench,
    title: 'Reparación y ajuste',
    desc: 'Mantenimiento, ajuste y reparación de armazones sin costo adicional.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-brand-dark font-bold text-sm tracking-wide uppercase">Servicios</span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-2 text-ink">
          Todo lo que tu vista necesita
        </h2>
      </div>
      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="border border-borderSoft rounded-2xl p-8 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div className="w-11 h-11 rounded-[10px] bg-brand flex items-center justify-center mb-5">
              <Icon size={22} className="text-white" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2 text-ink">{title}</h3>
            <p className="text-[15px] leading-relaxed text-inkMuted">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
