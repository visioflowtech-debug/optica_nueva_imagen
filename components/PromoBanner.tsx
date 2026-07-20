import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section className="w-full bg-primaryRed text-white py-3 text-center">
      <div className="flex items-center justify-center space-x-2">
        <MapPin size={20} />
        <p className="font-medium">
          ¡Nos mudamos! Visítanos en nuestro nuevo y amplio local en Plaza Palmeras con parqueo exclusivo
        </p>
      </div>
    </section>
  );
}
