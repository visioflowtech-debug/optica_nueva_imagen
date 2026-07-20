"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo placeholder */}
        <div className="text-2xl font-bold text-darkGray">Óptica Nueva Imagen</div>
        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-8 text-darkGray">
          <li><Link href="#" className="hover:text-primaryRed transition-colors">Inicio</Link></li>
          <li><Link href="#coleccion" className="hover:text-primaryRed transition-colors">Colección</Link></li>
          <li><Link href="#servicios" className="hover:text-primaryRed transition-colors">Servicios</Link></li>
          <li><Link href="#ubicacion" className="hover:text-primaryRed transition-colors">Ubicación</Link></li>
        </ul>
        {/* CTA button */}
        <a href="https://wa.link/p4j93v" target="_blank" rel="noopener noreferrer"
           className="hidden md:inline-block bg-primaryRed text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
          Haz tu cita
        </a>
        {/* Mobile menu button */}
        <button className="md:hidden text-darkGray" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-darkGray">
            <li><Link href="#" onClick={() => setOpen(false)}>Inicio</Link></li>
            <li><Link href="#coleccion" onClick={() => setOpen(false)}>Colección</Link></li>
            <li><Link href="#servicios" onClick={() => setOpen(false)}>Servicios</Link></li>
            <li><Link href="#ubicacion" onClick={() => setOpen(false)}>Ubicación</Link></li>
            <li>
              <a href="https://wa.link/p4j93v" target="_blank" rel="noopener noreferrer"
                 className="bg-primaryRed text-white block text-center px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                Haz tu cita
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
