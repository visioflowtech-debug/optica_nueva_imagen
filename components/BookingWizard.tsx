"use client";

import { useState } from 'react';
import { ScanEye, Droplet, Heart, Shield, ChevronRight, ChevronLeft, User, CheckCircle2, Phone, Mail } from 'lucide-react';
import { whatsappHrefWithMessage } from '@/lib/business';

// ─── Types ───────────────────────────────────────────────────────────────────
interface Service {
  id: string;
  icon: React.ElementType;
  name: string;
  duration: string;
}

interface BookingData {
  service: Service | null;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  patientType: 'new' | 'returning' | '';
}

// ─── Data ────────────────────────────────────────────────────────────────────
// Duraciones aproximadas; el precio se confirma en la cita según la evaluación.
const SERVICES: Service[] = [
  { id: 'exam',      icon: ScanEye, name: 'Examen Visual Computarizado',           duration: '45–60 min' },
  { id: 'contact',   icon: Droplet, name: 'Adaptación de Lentes de Contacto',      duration: '30–45 min' },
  { id: 'pediatric', icon: Heart,   name: 'Examen Visual Pediátrico',              duration: '30–40 min' },
  { id: 'control',   icon: Shield,  name: 'Control Visual',                       duration: '20–30 min' },
];

const STEP_LABELS = ['Servicio', 'Fecha', 'Horario', 'Tus datos', 'Confirmar'];

// Generate next 14 available dates (Mon–Sat)
function getAvailableDates() {
  const dates: { label: string; full: string; day: string; num: number; month: string }[] = [];
  const days = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
  const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  const today = new Date();
  const d = new Date(today);
  d.setDate(d.getDate() + 1);
  while (dates.length < 14) {
    const dow = d.getDay();
    if (dow !== 0) { // excluir domingos
      dates.push({
        label: `${days[dow]} ${d.getDate()} ${months[d.getMonth()]}`,
        full:  `${days[dow]}, ${d.getDate()} de ${['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'][d.getMonth()]}`,
        day:   days[dow],
        num:   d.getDate(),
        month: months[d.getMonth()],
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

const DATES = getAvailableDates();
const TIMES_MORNING = ['09:00','09:30','10:00','10:30','11:00','11:30'];
const TIMES_AFTERNOON = ['15:00','15:30','16:00','16:30'];

// ─── Step Indicator ───────────────────────────────────────────────────────────
function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-between mb-8 px-2">
      {STEP_LABELS.map((label, i) => {
        const step = i + 1;
        const done = step < current;
        const active = step === current;
        return (
          <div key={step} className="flex flex-1 items-center">
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300
                  ${done   ? 'bg-brand text-white shadow-md' :
                    active ? 'bg-brand text-white shadow-lg ring-4 ring-brand/20' :
                             'bg-surfaceAlt text-inkMuted'}`}
              >
                {done ? <CheckCircle2 size={16} /> : step}
              </div>
              <span className={`text-xs mt-1 font-medium ${active ? 'text-brand-dark' : 'text-inkMuted'}`}>
                {label}
              </span>
            </div>
            {i < STEP_LABELS.length - 1 && (
              <div className={`flex-1 h-0.5 mx-1 mb-4 transition-all duration-500 ${done ? 'bg-brand' : 'bg-borderSoft'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Step 1 — Service ─────────────────────────────────────────────────────────
function Step1({ onSelect }: { onSelect: (s: Service) => void }) {
  return (
    <div className="animate-fade-up">
      <h2 className="text-xl font-bold text-ink mb-1">¿Qué tipo de atención necesitas?</h2>
      <p className="text-sm text-inkMuted mb-6">Selecciona el servicio para continuar</p>
      <div className="flex flex-col gap-3">
        {SERVICES.map(svc => {
          const Icon = svc.icon;
          return (
            <button
              key={svc.id}
              onClick={() => onSelect(svc)}
              className="flex items-center gap-4 p-4 rounded-2xl border border-borderSoft bg-white hover:border-brand hover:shadow-md hover:-translate-y-0.5 transition-all text-left group"
            >
              <div className="w-11 h-11 rounded-xl bg-surfaceAlt flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors">
                <Icon size={20} className="text-brand-dark group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-ink text-sm">{svc.name}</p>
                <p className="text-xs text-inkMuted">{svc.duration}</p>
              </div>
              <ChevronRight size={18} className="text-inkMuted group-hover:text-brand-dark transition-colors" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Step 2 — Date ───────────────────────────────────────────────────────────
function Step2({ service, date, onSelect }: { service: Service; date: string; onSelect: (d: string) => void }) {
  return (
    <div className="animate-fade-up">
      <h2 className="text-xl font-bold text-ink mb-1">Elige una fecha disponible</h2>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surfaceAlt mb-6">
        <ScanEye size={13} className="text-brand-dark" />
        <span className="text-xs font-medium text-ink">{service.name}</span>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-3">
        {DATES.map(d => {
          const selected = date === d.label;
          return (
            <button
              key={d.label}
              onClick={() => onSelect(d.label)}
              className={`flex flex-col items-center py-2 px-1 rounded-xl border text-xs font-medium transition-all
                ${selected
                  ? 'border-brand bg-brand text-white shadow-md scale-105'
                  : 'border-borderSoft bg-white text-ink hover:border-brand hover:shadow-sm'
                }`}
            >
              <span className="text-[10px] opacity-70">{d.day}</span>
              <span className="text-base font-bold">{d.num}</span>
              <span className="text-[10px] opacity-70">{d.month}</span>
            </button>
          );
        })}
      </div>
      <p className="text-xs text-inkMuted">Sáb solo hasta las 5:00 p.m.</p>
    </div>
  );
}

// ─── Step 3 — Time ───────────────────────────────────────────────────────────
function Step3({ service, date, time, onSelect }: { service: Service; date: string; time: string; onSelect: (t: string) => void }) {
  const TimeButton = ({ t }: { t: string }) => {
    const selected = time === t;
    return (
      <button
        onClick={() => onSelect(t)}
        className={`py-3 px-2 rounded-xl border text-sm font-semibold transition-all
          ${selected ? 'border-brand bg-brand text-white shadow-md scale-105' :
                       'border-borderSoft bg-white text-ink hover:border-brand hover:shadow-sm'
          }`}
      >
        {t}
      </button>
    );
  };

  return (
    <div className="animate-fade-up">
      <h2 className="text-xl font-bold text-ink mb-1">Elige un horario</h2>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surfaceAlt mb-6 w-fit">
        <span className="text-xs font-medium text-ink">{service.name}</span>
        <span className="text-inkMuted">·</span>
        <span className="text-xs text-inkMuted">{date}</span>
      </div>

      <p className="text-xs font-semibold text-inkMuted uppercase tracking-wider mb-2">Mañana</p>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-5">
        {TIMES_MORNING.map(t => <TimeButton key={t} t={t} />)}
      </div>

      <p className="text-xs font-semibold text-inkMuted uppercase tracking-wider mb-2">Tarde</p>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {TIMES_AFTERNOON.map(t => <TimeButton key={t} t={t} />)}
      </div>
    </div>
  );
}

// ─── Step 4 — User Data ───────────────────────────────────────────────────────
function Step4({ data, onChange }: { data: BookingData; onChange: (field: keyof BookingData, val: string) => void }) {
  const inputClass = "w-full border border-borderSoft rounded-xl px-4 py-3 text-sm text-ink placeholder-inkMuted focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all";
  return (
    <div className="animate-fade-up">
      <h2 className="text-xl font-bold text-ink mb-1">Tus datos</h2>
      <p className="text-sm text-inkMuted mb-6">Completa la información para confirmar tu cita</p>

      <div className="flex flex-col gap-4">
        <div>
          <label className="text-xs font-semibold text-ink uppercase tracking-wider mb-1 flex items-center gap-1">
            <User size={11} /> Nombre completo *
          </label>
          <input type="text" className={inputClass} placeholder="Ej. María García" value={data.name} onChange={e => onChange('name', e.target.value)} />
        </div>

        <div>
          <label className="text-xs font-semibold text-ink uppercase tracking-wider mb-1 flex items-center gap-1">
            <Phone size={11} /> Teléfono *
          </label>
          <input type="tel" className={inputClass} placeholder="+503 7000 0000" value={data.phone} onChange={e => onChange('phone', e.target.value)} />
        </div>

        <div>
          <label className="text-xs font-semibold text-ink uppercase tracking-wider mb-1 flex items-center gap-1">
            <Mail size={11} /> Correo electrónico *
          </label>
          <input type="email" className={inputClass} placeholder="correo@ejemplo.com" value={data.email} onChange={e => onChange('email', e.target.value)} />
        </div>

        <div>
          <label className="text-xs font-semibold text-ink uppercase tracking-wider mb-2">Tipo de paciente *</label>
          <div className="grid grid-cols-2 gap-3">
            {(['new', 'returning'] as const).map(type => (
              <button
                key={type}
                onClick={() => onChange('patientType', type)}
                className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all
                  ${data.patientType === type
                    ? 'border-brand bg-brand text-white shadow-md'
                    : 'border-borderSoft bg-white text-inkMuted hover:border-brand hover:text-brand-dark'
                  }`}
              >
                {type === 'new' ? 'Paciente nuevo' : 'Paciente recurrente'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Step 5 — Confirm ─────────────────────────────────────────────────────────
function Step5({ data, onConfirm }: { data: BookingData; onConfirm: () => void }) {
  const rows = [
    { label: 'Servicio',  value: data.service?.name ?? '' },
    { label: 'Fecha',     value: data.date },
    { label: 'Horario',   value: data.time },
    { label: 'Nombre',    value: data.name },
    { label: 'Teléfono',  value: data.phone },
    { label: 'Email',     value: data.email },
    { label: 'Paciente',  value: data.patientType === 'new' ? 'Nuevo' : 'Recurrente' },
  ];

  return (
    <div className="animate-fade-up">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 size={24} className="text-green-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-ink">Confirma tu cita</h2>
          <p className="text-sm text-inkMuted">Revisa los datos antes de enviar</p>
        </div>
      </div>

      <div className="rounded-2xl border border-borderSoft overflow-hidden mb-6">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex items-start justify-between px-4 py-3 border-b border-borderSoft last:border-0 odd:bg-white even:bg-surfaceAlt/50">
            <span className="text-xs font-semibold text-inkMuted uppercase tracking-wider w-24 flex-shrink-0">{label}</span>
            <span className="text-sm font-medium text-ink text-right">{value}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onConfirm}
        className="w-full py-4 rounded-full text-white font-bold text-base bg-brand shadow-lg hover:shadow-xl hover:bg-brand-dark hover:-translate-y-0.5 transition-all"
      >
        Confirmar cita por WhatsApp
      </button>
      <p className="text-center text-xs text-inkMuted mt-3">
        Al confirmar, se abrirá WhatsApp con los datos de tu cita.
      </p>
    </div>
  );
}

// ─── Main Wizard ──────────────────────────────────────────────────────────────
export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingData>({
    service: null, date: '', time: '', name: '', phone: '', email: '', patientType: '',
  });

  const update = (field: keyof BookingData, val: string) =>
    setData(prev => ({ ...prev, [field]: val }));

  const next = () => setStep(s => Math.min(s + 1, 5));
  const prev = () => setStep(s => Math.max(s - 1, 1));

  const canNext = () => {
    if (step === 1) return !!data.service;
    if (step === 2) return !!data.date;
    if (step === 3) return !!data.time;
    if (step === 4) return !!(data.name && data.phone && data.email && data.patientType);
    return true;
  };

  const handleConfirm = () => {
    const msg =
      `¡Hola! Quiero confirmar mi cita:\n\n` +
      `Servicio: ${data.service?.name}\n` +
      `Fecha: ${data.date}\n` +
      `Horario: ${data.time}\n` +
      `Nombre: ${data.name}\n` +
      `Teléfono: ${data.phone}\n` +
      `Email: ${data.email}\n` +
      `Tipo: ${data.patientType === 'new' ? 'Paciente nuevo' : 'Paciente recurrente'}`;
    window.open(whatsappHrefWithMessage(msg), '_blank');
  };

  return (
    <section id="agenda" className="py-16 px-4 bg-surfaceAlt">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink mb-2">Agenda tu cita</h2>
          <p className="text-inkMuted">Proceso simple en 5 pasos.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-borderSoft p-6 md:p-8">
          <StepIndicator current={step} />

          {step > 1 && (
            <button
              onClick={prev}
              className="flex items-center gap-1 text-sm font-medium text-inkMuted hover:text-brand-dark transition-colors mb-5"
            >
              <ChevronLeft size={16} /> Volver
            </button>
          )}

          {step === 1 && <Step1 onSelect={s => { setData(prev => ({ ...prev, service: s })); next(); }} />}
          {step === 2 && <Step2 service={data.service!} date={data.date} onSelect={d => { update('date', d); }} />}
          {step === 3 && <Step3 service={data.service!} date={data.date} time={data.time} onSelect={t => { update('time', t); }} />}
          {step === 4 && <Step4 data={data} onChange={update} />}
          {step === 5 && <Step5 data={data} onConfirm={handleConfirm} />}

          {step >= 2 && step < 5 && (
            <button
              onClick={next}
              disabled={!canNext()}
              className="mt-6 w-full py-3.5 rounded-full text-white font-bold text-sm bg-brand-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 hover:shadow-lg"
            >
              {step === 4 ? 'Revisar mi cita' : 'Continuar'} →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
