/*
Archivo: App.jsx
Proyecto: React (Vite) + TailwindCSS
Instrucciones rápidas:
1) Crear proyecto Vite: `npm create vite@latest floreria-dulce-aroma -- --template react`
2) Entrar al proyecto: `cd floreria-dulce-aroma`
3) Instalar dependencias: `npm install`
4) Instalar TailwindCSS siguiendo la guía oficial (https://tailwindcss.com/docs/guides/vite) y pegar este componente en `src/App.jsx`.
5) Coloca tu logo en `public/logo.png` (el componente referencia `/logo.png`).
6) Para desplegar en Vercel: sube tu repo a GitHub, conecta el repo en Vercel y listo (Vercel detecta Vite automáticamente).

Notas: Reemplaza los datos de contacto (teléfono, correo, dirección) en la sección de `CONTACT_DATA` más abajo.
*/

import React, { useState } from 'react';

const CONTACT_DATA = {
  phone: '+529981352920', // formato: sin espacios, ejemplo +5215512345678
  email: 'hola@dulcearoma.com',
  whatsappNumber: '+529981352920', // para link wa.me, ejemplo 5215512345678 (52 = México)
  address: 'Porfirio Díaz, Pte. 512, Centro, 66400 San Nicolás de los Garza, N.L.',
};

const SAMPLE_PRODUCTS = [
  { id: 1, name: 'Ramo Rosas Clásicas', price: '$750', imgQuery: 'roses,bouquet', img: '/image/Flor1.avif' },
  { id: 2, name: 'Mix Primavera', price: '$620', imgQuery: 'spring flowers,flowers', img: '/image/Flor2.webp' },
  { id: 3, name: 'Orquídea Elegante', price: '$980', imgQuery: 'orchid,flower', img: '/image/Flor3.webp' },
  { id: 4, name: 'Caja Dulce Aroma', price: '$1,200', imgQuery: 'flower box,roses', img: '/image/Flor4.jpg' },
];


export default function App() {
  const [tab, setTab] = useState('inicio');

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 font-sans text-gray-800">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo: reemplaza public/logo.png con tu imagen */}
          <img src="/image/Logo.png" alt="Florería Dulce Aroma" className="w-20 h-20 object-contain rounded-lg shadow" />
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Florería <span className="text-pink-600">Dulce Aroma</span></h1>
            <p className="text-sm text-gray-600">Flores frescas • Detalles con cariño • Envíos locales</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-2 bg-white/60 backdrop-blur rounded-full p-1 shadow">
          <TabButton active={tab === 'inicio'} onClick={() => setTab('inicio')}>Inicio</TabButton>
          <TabButton active={tab === 'tienda'} onClick={() => setTab('tienda')}>Tienda</TabButton>
          <TabButton active={tab === 'contacto'} onClick={() => setTab('contacto')}>Contacto</TabButton>
        </nav>

        <div className="md:hidden">
          <select value={tab} onChange={(e) => setTab(e.target.value)} className="rounded-lg p-2 shadow">
            <option value="inicio">Inicio</option>
            <option value="tienda">Tienda</option>
            <option value="contacto">Contacto</option>
          </select>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {tab === 'inicio' && <Inicio />}
        {tab === 'tienda' && <Tienda />}
        {tab === 'contacto' && <Contacto />}
      </main>

      <footer className="mt-12 border-t pt-6 pb-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Florería Dulce Aroma — Hecho con amor</div>
          <div className="flex gap-4">
            <a className="text-sm underline" href={`mailto:${CONTACT_DATA.email}`}>Email</a>
            <a className="text-sm underline" href={`https://wa.me/${CONTACT_DATA.whatsappNumber}`}>WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );

  function Inicio() {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-2">Bienvenido a <span className="text-pink-600">Dulce Aroma</span></h2>
          <p className="text-gray-700 leading-relaxed">En Florería Dulce Aroma nos especializamos en crear arreglos únicos para cada ocasión: cumpleaños, aniversarios, eventos corporativos y más. Trabajamos con flores frescas y proveedores locales para garantizar calidad y durabilidad en cada detalle.</p>

          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>• Entregas locales el mismo día (según zona)</li>
            <li>• Arreglos personalizados</li>
            <li>• Envoltura premium y tarjetas personalizadas</li>
          </ul>

          <div className="mt-4 flex gap-3">
            <a href={`https://wa.me/${CONTACT_DATA.whatsappNumber}`} className="inline-block px-4 py-2 rounded-full bg-pink-600 text-white font-semibold shadow">Enviar WhatsApp</a>
            <a href={`mailto:${CONTACT_DATA.email}`} className="inline-block px-4 py-2 rounded-full border border-pink-600 text-pink-600 font-semibold">Enviar correo</a>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <h3 className="font-semibold mb-2">Visítanos</h3>
            <p className="text-sm text-gray-600">{CONTACT_DATA.address}</p>
            <div className="mt-4 w-full h-48 rounded-lg overflow-hidden shadow-sm">
              {/* Reemplaza el src del iframe con tu embed de Google Maps si lo deseas */}
              <iframe
                title="mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.4842844623176!2d-100.29579330000001!3d25.754562899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662948e5aafeef1%3A0x4161ec76fde2452b!2sFloreria%20Dulce%20Aroma!5e0!3m2!1ses-419!2smx!4v1765926550616!5m2!1ses-419!2smx"
                className="w-full h-full border-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-white rounded-2xl p-4 shadow-md">
            <h3 className="font-semibold">Novedades</h3>
            <p className="text-sm text-gray-600">Suscríbete para recibir promociones y diseños nuevos.</p>
            <div className="mt-3 flex gap-2">
              <input placeholder="Tu correo" className="flex-1 rounded-lg p-2 border" />
              <button className="px-4 rounded-lg bg-pink-600 text-white font-medium">Suscribirme</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function Tienda() {
    return (
      <section>
        <h2 className="text-2xl font-bold mb-4">Nuestra selección</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_PRODUCTS.map((p) => (
            <article key={p.id} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
              <img
                src={p.img ? p.img : `https://source.unsplash.com/600x400/?${encodeURIComponent(p.imgQuery)}`}
                alt={p.name}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.price}</p>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 px-3 py-2 rounded-full border border-pink-600 text-pink-600 font-medium">Ver</button>
                  <a href={`https://wa.me/${CONTACT_DATA.whatsappNumber}?text=${encodeURIComponent('Hola! quiero comprar: ' + p.name)}`} className="px-3 py-2 rounded-full bg-pink-600 text-white font-medium">Pedir</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  function Contacto() {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-2">Contacto</h2>
          <p className="text-sm text-gray-600 mb-4">Contáctanos por WhatsApp, correo o visitando la tienda.</p>

          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold">WhatsApp</h4>
              <a className="text-pink-600 break-words" href={`https://wa.me/${CONTACT_DATA.whatsappNumber}`}>{CONTACT_DATA.phone}</a>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Correo</h4>
              <a className="text-pink-600" href={`mailto:${CONTACT_DATA.email}`}>{CONTACT_DATA.email}</a>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Dirección</h4>
              <p className="text-gray-600">{CONTACT_DATA.address}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="font-semibold mb-2">Envía un mensaje</h3>
          <form onSubmit={(e) => { e.preventDefault(); alert('Formulario enviado (simulado)'); }} className="space-y-3">
            <input required placeholder="Tu nombre" className="w-full p-3 rounded-lg border" />
            <input required type="email" placeholder="Tu correo" className="w-full p-3 rounded-lg border" />
            <textarea required placeholder="Mensaje" className="w-full p-3 rounded-lg border h-28" />
            <div className="flex gap-2">
              <button type="submit" className="flex-1 px-4 py-2 rounded-full bg-pink-600 text-white font-medium">Enviar</button>
              <a href={`https://wa.me/${CONTACT_DATA.whatsappNumber}`} className="px-4 py-2 rounded-full border border-pink-600 text-pink-600">WhatsApp</a>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

function TabButton({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-medium transition ${active ? 'bg-pink-600 text-white shadow' : 'text-pink-600 hover:bg-pink-50'}`}>
      {children}
    </button>
  );
}
