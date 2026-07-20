import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center bg-gray-50 py-16 px-6 md:px-12">
      {/* Left text */}
      <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl font-bold text-darkGray mb-4">
          Tu visión, tu mejor imagen
        </h1>
        <p className="text-lg text-brandGreen mb-6 max-w-md mx-auto md:mx-0">
          Descubre nuestra nueva colección de aros y agenda tu examen visual con expertos.
        </p>
        <a
          href="https://wa.link/p4j93v"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primaryRed text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Agendar Examen Visual
        </a>
      </div>
      {/* Right image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1582719478250-5c8c6b9d3f2e?auto=format&fit=crop&w=800&q=80"
          alt="Person wearing glasses"
          width={500}
          height={350}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
