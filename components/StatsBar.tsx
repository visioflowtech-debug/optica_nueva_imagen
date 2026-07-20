import { Award, Users, Star, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: Award,       value: '15+',    label: 'años de experiencia' },
  { icon: Users,       value: '+8.000', label: 'pacientes atendidos' },
  { icon: Star,        value: '4.9 ★',  label: 'en Google' },
  { icon: ShieldCheck, value: '100%',   label: 'equipos certificados' },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-borderCol" id="servicios">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center text-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-lightBg flex items-center justify-center group-hover:bg-navy group-hover:scale-110 transition-all duration-300">
              <Icon size={22} className="text-navy group-hover:text-white transition-colors duration-300" />
            </div>
            <p className="text-2xl font-black text-navy">{value}</p>
            <p className="text-sm text-textMuted leading-snug">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
