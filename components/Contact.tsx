"use client";

import { useState } from 'react';
import { BUSINESS, whatsappHrefWithMessage } from '@/lib/business';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hola, soy ${name || '(nombre)'}.\n` +
      `Teléfono: ${phone || '(teléfono)'}\n` +
      (msg ? `Mensaje: ${msg}` : '¿En qué me pueden ayudar?');
    window.open(whatsappHrefWithMessage(text), '_blank');
  };

  return (
    <section id="contacto" className="max-w-6xl mx-auto px-4 py-20">
      <div className="bg-brand-dark rounded-3xl p-10 md:p-14 flex gap-12 flex-wrap text-white">
        <div className="flex-1 min-w-[280px]">
          <h2 className="font-display font-extrabold text-3xl mb-3">Agenda tu cita hoy</h2>
          <p className="text-base leading-relaxed opacity-85 mb-7 max-w-sm">
            Escríbenos por WhatsApp, llámanos o déjanos tus datos y te contactamos.
          </p>
          <div className="flex flex-col gap-2.5 text-[15px]">
            <a href={BUSINESS.whatsappHref} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
              WhatsApp: {BUSINESS.phoneDisplay}
            </a>
            <a href={`tel:${BUSINESS.phoneNumber}`} className="font-semibold hover:underline">
              Teléfono: {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 min-w-[280px] bg-white rounded-2xl p-7 flex flex-col gap-3.5">
          <input
            type="text"
            placeholder="Nombre"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="px-3.5 py-3 rounded-lg border border-borderSoft text-[15px] text-ink focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
          />
          <input
            type="tel"
            placeholder="Teléfono"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="px-3.5 py-3 rounded-lg border border-borderSoft text-[15px] text-ink focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
          />
          <textarea
            placeholder="¿En qué te ayudamos?"
            rows={3}
            value={msg}
            onChange={e => setMsg(e.target.value)}
            className="px-3.5 py-3 rounded-lg border border-borderSoft text-[15px] text-ink resize-y focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
          />
          <button
            type="submit"
            className="bg-brand text-white border-0 py-3.5 rounded-lg font-bold text-[15px] hover:bg-brand-dark transition-all"
          >
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
