"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS } from '@/lib/business';

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Consejos', href: '#consejos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/92 backdrop-blur-md border-b border-borderSoft">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 gap-4">
        <Link href="#inicio" className="flex items-center gap-3 group flex-shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.webp"
            alt="Óptica Nueva Imagen"
            width={44}
            height={44}
            className="rounded-xl"
            priority
          />
          <span className="font-display font-extrabold text-lg tracking-tight text-ink hidden sm:inline">
            Óptica Nueva Imagen
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-inkMuted hover:text-brand-dark transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={BUSINESS.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-dark hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          Agendar por WhatsApp
        </a>

        <button
          className="lg:hidden text-ink p-2 rounded-lg hover:bg-surfaceAlt transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-surface border-t border-borderSoft animate-slide-in">
          <ul className="flex flex-col py-2">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-6 py-3 text-sm font-medium text-ink hover:bg-surfaceAlt hover:text-brand-dark transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-4 py-3">
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-brand text-white text-sm font-semibold px-4 py-3 rounded-lg hover:bg-brand-dark transition-all"
                onClick={() => setOpen(false)}
              >
                Agendar por WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
