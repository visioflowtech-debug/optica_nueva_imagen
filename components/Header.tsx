"use client";

import { useState } from 'react';
import { Menu, X, Eye } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'Inicio',        href: '#inicio' },
  { label: 'Servicios',     href: '#servicios' },
  { label: 'Promociones',   href: '#promociones' },
  { label: 'Preguntas frecuentes', href: '#faq' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-borderCol shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shadow-md group-hover:bg-navyLight transition-colors">
            <Eye size={20} className="text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-xs font-semibold text-textMuted tracking-widest uppercase">Óptica</p>
            <p className="text-sm font-bold text-navy tracking-wide">NUEVA IMAGEN</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-textMuted hover:text-navy transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a
          href="#agenda"
          className="hidden md:inline-flex items-center gap-2 bg-gold text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-goldLight hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          Agenda tu cita
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-navy p-2 rounded-lg hover:bg-lightBg transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-borderCol animate-slide-in">
          <ul className="flex flex-col py-2">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-6 py-3 text-sm font-medium text-darkGray hover:bg-lightBg hover:text-navy transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-4 py-3">
              <a
                href="#agenda"
                className="block text-center bg-gold text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-goldLight transition-all"
                onClick={() => setOpen(false)}
              >
                Agenda tu cita
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
