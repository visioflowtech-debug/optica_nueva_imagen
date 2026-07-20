import { Eye, Sun, Droplet, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    name: 'Lentes Oftálmicos',
    icon: <Eye size={40} />, 
    href: '#',
  },
  {
    name: 'Lentes de Sol',
    icon: <Sun size={40} />, 
    href: '#',
  },
  {
    name: 'Lentes de Contacto',
    icon: <Droplet size={40} />, 
    href: '#',
  },
  {
    name: 'Examen Visual',
    icon: <ClipboardCheck size={40} />, 
    href: '#',
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-12 bg-lightGray" id="coleccion">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-darkGray mb-8">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group bg-white rounded-xl shadow hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
            >
              <div className="text-primaryRed mb-4 group-hover:text-brandGreen transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-xl font-medium text-darkGray group-hover:text-primaryRed transition-colors">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
