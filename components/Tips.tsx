import { BookOpen, Glasses, Droplets } from 'lucide-react';

const tips = [
  {
    icon: BookOpen,
    title: '5 señales de que necesitas un examen visual',
    excerpt: 'Dolores de cabeza frecuentes, entrecerrar los ojos para leer o cansancio visual son señales de alerta comunes.',
  },
  {
    icon: Glasses,
    title: 'Cómo elegir el armazón ideal para tu rostro',
    excerpt: 'La forma de tu cara y tu estilo personal definen el armazón que más te favorece.',
  },
  {
    icon: Droplets,
    title: 'Cuidados diarios para tus lentes de contacto',
    excerpt: 'La higiene correcta previene infecciones y prolonga la vida útil de tus lentes.',
  },
];

export default function Tips() {
  return (
    <section id="consejos" className="bg-surfaceAlt py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-brand-dark font-bold text-sm tracking-wide uppercase">Consejos</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-2 text-ink">Cuida tu vista</h2>
        </div>
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {tips.map(({ icon: Icon, title, excerpt }) => (
            <div key={title} className="bg-white rounded-2xl border border-borderSoft p-7">
              <div className="w-11 h-11 rounded-[10px] bg-brand-light flex items-center justify-center mb-5">
                <Icon size={20} className="text-brand-dark" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-ink">{title}</h3>
              <p className="text-[14.5px] leading-relaxed text-inkMuted">{excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
