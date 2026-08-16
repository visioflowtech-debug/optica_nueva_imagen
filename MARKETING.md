# Óptica Nueva Imagen — Plan de marketing digital

Este documento es el entregable del "agente de marketing". No publica nada por sí solo:
son instrucciones y contenido listo para que tú (o quien administre las redes) lo ejecute,
o para conectarlo más adelante a una herramienta de publicación (Meta Business Suite, Buffer, etc.)
con las credenciales reales de la óptica.

## 0. Antes de nada — pendientes que solo tú puedes resolver
- [x] Dominio real de producción: `https://www.nuevaimagen.shop` — ya está fijado como valor por defecto en `lib/business.ts` (`SITE_URL`), usado en metadatos, Open Graph, JSON-LD, sitemap y robots.
- [x] Facebook enlazado: `https://www.facebook.com/profile.php?id=61554956325320` (footer + `schema.org sameAs`).
- [x] Instagram enlazado: `https://www.instagram.com/optica.nueva.imagensv/` (footer + `schema.org sameAs`).
- [x] TikTok enlazado: `https://www.tiktok.com/@optica.nueva.imagensv` (footer + `schema.org sameAs`).
- [ ] Dar de alta o reclamar el perfil de **Google Business Profile** (si no existe) con el nombre, dirección y teléfono exactos que ya están en el sitio.
- [ ] Decidir quién responde los mensajes de WhatsApp que llegan desde el botón "Agendar por WhatsApp" — es el canal de conversión principal del sitio.

## 1. Por qué no hay testimonios de pacientes en el sitio
La plantilla original traía 3 reseñas de ejemplo con nombres inventados ("Marta G.", "Carlos R."...).
No las usé: publicar testimonios inventados como si fueran reseñas reales de pacientes es
publicidad engañosa (y arriesga sanciones o penalización de Google). En su lugar, el sitio
muestra la valoración real de Google (4.9★) con un botón directo a las reseñas.

**Cómo conseguir reseñas reales rápido:** después de cada cita, enviar por WhatsApp el enlace
directo para calificar: `https://search.google.com/local/writereview?placeid=<TU_PLACE_ID>`
(se obtiene desde el propio perfil de Google Business). Pide reseñas solo a pacientes satisfechos,
nunca a cambio de incentivos (viola las políticas de Google).

## 2. Checklist de Google Business Profile (SEO local)
- [ ] Categoría principal: "Óptica" / "Optician". Categorías secundarias: "Tienda de artículos ópticos", "Óptica y oftalmología".
- [ ] Dirección exacta idéntica a la del sitio (Plaza Palmeras, Local 12, Lourdes, Colón, La Libertad).
- [ ] Teléfono idéntico al del sitio: +503 2562 9435.
- [ ] Horario idéntico: Lun–Sáb 8:30 a.m.–5:00 p.m.
- [ ] Subir 10–15 fotos reales: fachada, interior, equipo de diagnóstico, muestrario de armazones, equipo de trabajo.
- [ ] Activar mensajería de Google Business (canal adicional a WhatsApp).
- [ ] Publicar 1 "Google Post" cada 1–2 semanas (promoción, servicio, consejo).
- [ ] Responder todas las reseñas, buenas y malas, en menos de 48h.

## 3. Calendario de contenido para redes (4 semanas, listo para copiar/pegar)
Tono: cercano, profesional, local. CTA constante: agendar cita por WhatsApp.

| Semana | Lunes | Miércoles | Viernes |
|---|---|---|---|
| 1 | Presentación: "12+ años cuidando la vista de Lourdes" + foto de fachada | Consejo: 5 señales de que necesitas un examen visual | Servicio destacado: examen visual computarizado (antes/después del proceso) |
| 2 | Testimonio real (si ya hay uno recopilado) o dato curioso sobre salud visual | Detrás de cámaras: equipo de diagnóstico y por qué importa | Promo o recordatorio de horario de sábado |
| 3 | Consejo: cómo elegir armazón según la forma de tu rostro | Servicio destacado: lentes de contacto (adaptación y asesoría) | Pregunta interactiva: "¿Cuánto hace que no te revisas la vista?" + CTA agendar |
| 4 | Caso de uso: examen visual pediátrico, cuándo llevar a los niños | Consejo: cuidado diario de lentes de contacto | Cierre de mes: reseñas de Google + botón de agendar |

Cada post debe llevar: foto real (no stock), texto corto (2–4 líneas), y el enlace/botón de WhatsApp
o "más info en el link de la bio" apuntando al sitio.

## 4. Copys listos para usar

**Meta descripción / bio de redes:**
> Óptica Nueva Imagen — Cuidado visual de confianza en Lourdes, Colón. Exámenes visuales computarizados, armazones y lentes de contacto. Agenda tu cita por WhatsApp: +503 2562 9435.

**Post de lanzamiento del sitio nuevo:**
> ✨ Estrenamos sitio web. Ahora puedes ver nuestros servicios, ubicarnos en el mapa y agendar tu cita directo por WhatsApp, sin llamadas ni esperas. [enlace]

**Anuncio de WhatsApp/Google Ads (variante corta):**
> Óptica en Lourdes, Colón. Examen visual computarizado + atención personalizada. Agenda hoy por WhatsApp.

## 5. Siguientes pasos de crecimiento pagado (cuando haya presupuesto)
- Google Ads de búsqueda local con las keywords ya incluidas en el sitio (`óptica en Lourdes Colón`, `óptica La Libertad El Salvador`, `examen visual computarizado`).
- Meta Ads con objetivo "mensajes" apuntando directo al WhatsApp — es el mismo canal que ya usa el sitio, así que la conversión es consistente en todos los puntos de contacto.
- Retargeting a visitantes del sitio que no completaron el wizard de agendamiento (requiere Meta Pixel / Google Tag — decidir si se instala, implica banner de cookies).

## 6. Lo que el sitio ya hace por el SEO técnico (implementado en este cambio)
- Metadata completa (title, description, Open Graph, Twitter card) con las palabras clave locales.
- JSON-LD `schema.org/Optician` con dirección, teléfono y horario — ayuda a Google a mostrar el negocio como resultado local (rich snippet / Knowledge Panel).
- `sitemap.xml` y `robots.txt` generados automáticamente.
- Imágenes reales del local (no stock) servidas vía `next/image`, optimizadas y con `alt` descriptivo.
- Un único número de WhatsApp y una única fuente de datos del negocio (`lib/business.ts`) para evitar la inconsistencia que había antes (el sitio anterior mostraba dos números de WhatsApp distintos y dos horarios distintos entre el Footer y el resto de la página).
