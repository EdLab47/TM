import React from 'react';
import { Cpu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 via-primary to-purple-700 text-white shadow-2xl p-8 md:p-12 mb-10 text-center">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6 shadow-lg">
          <Cpu className="w-4 h-4 text-emerald-300" />
          <span className="text-sm font-medium tracking-wide text-emerald-100">Taller de Informática</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
          Proyecto Maestro:<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-white">
            Catálogo de Tarjeta Madre
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
          Aprende a desglosar sistemas complejos y a presentarlos como un profesional de la tecnología.
        </p>
      </div>
    </header>
  );
};
