import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="w-full bg-brandBlue text-white py-12" id="cita">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">¿Hace cuánto no revisas tu vista?</h2>
        <a
          href="https://wa.link/p4j93v"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primaryRed text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
        >
          Haz tu cita ahora
        </a>
      </div>
    </section>
  );
}
