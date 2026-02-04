import React from 'react';
import { Target, Presentation, Search, Map, Wand2, Clock, Rocket, Wrench } from 'lucide-react';
import { GuideStep, SheetInfo } from './types';

export const SHEET_LIST: SheetInfo[] = [
  { id: 1, title: "Portada", description: "Nombre, grado y grupo" },
  { id: 2, title: "Tarjeta Madre", description: "Concepto y Mapa Maestro" },
  { id: 3, title: "Socket del procesador", description: "" },
  { id: 4, title: "Ranuras de memoria RAM", description: "" },
  { id: 5, title: "Chipset", description: "" },
  { id: 6, title: "Ranuras de expansión", description: "(PCI Express)" },
  { id: 7, title: "Puertos SATA", description: "" },
  { id: 8, title: "Conectores de alimentación", description: "" },
  { id: 9, title: "Chip de la BIOS", description: "" },
  { id: 10, title: "Conclusión", description: "¿Cuál pieza es la más importante y por qué?" },
];

export const GUIDE_STEPS: GuideStep[] = [
  {
    id: 'objective',
    title: 'Objetivo',
    icon: <Target className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <p>
          Investigarás los componentes de una computadora para entender su funcionamiento. Crearás un catálogo profesional de 10 hojas donde tú mismo resumirás la información (sin copiar y pegar), ubicarás las piezas en un mapa y programarás una presentación que se explique sola mediante animaciones y tiempos automáticos.
        </p>
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
          <p className="text-sm text-emerald-800 font-medium">
            Relación con el Taller: Un técnico debe ser capaz de explicar un sistema de forma clara y breve. Al leer y resumir, estás analizando cómo se organiza un sistema electrónico de control.
          </p>
        </div>
      </div>
    ),
    isCheckable: false,
  },
  {
    id: 'step1',
    title: '1. Preparar las 10 hojas',
    icon: <Presentation className="w-6 h-6" />,
    content: (
      <ol className="space-y-4 list-decimal list-inside text-slate-700">
        <li className="pl-2">Haz dos clics rápidos en el icono de <strong>PowerPoint</strong>.</li>
        <li className="pl-2">Haz un clic izquierdo en <strong>Presentación en blanco</strong>.</li>
        <li className="pl-2">Haz clic en el cuadro pequeño #1 a la izquierda y presiona la tecla <strong>Enter 9 veces</strong> hasta tener 10 hojas blancas.</li>
        <li className="pl-2">Borra cualquier cuadro de texto que aparezca automáticamente haciendo clic en su orilla y presionando <strong>Suprimir</strong>.</li>
      </ol>
    ),
    isCheckable: true,
  },
  {
    id: 'step2',
    title: '2. Guía de Investigación',
    icon: <Search className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <p>En cada hoja (de la 2 a la 9) buscarás en Google:</p>
        <ul className="list-disc list-inside pl-4 font-semibold text-primary">
          <li>1. ¿Qué es?</li>
          <li>2. ¿Para qué sirve?</li>
        </ul>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
          <strong className="block text-amber-800 mb-1">⚠️ REGLA DE ORO: Leer y Resumir</strong>
          <p className="text-sm text-amber-700">
             No copies y pegues textos largos. Debes LEER y escribir un RESUMEN CORTO de máximo 4 o 5 renglones. Si pones demasiada información, la hoja se verá amontonada y el tiempo automático no alcanzará.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
            {SHEET_LIST.map((sheet) => (
                <div key={sheet.id} className="bg-slate-100 p-2 rounded text-sm border border-slate-200">
                    <span className="font-bold text-primary">Hoja {sheet.id}:</span> {sheet.title} <span className="text-slate-500">{sheet.description}</span>
                </div>
            ))}
        </div>
      </div>
    ),
    isCheckable: true,
  },
  {
    id: 'step3',
    title: '3. El Mapa Maestro (Hoja 2)',
    icon: <Map className="w-6 h-6" />,
    content: (
      <ul className="space-y-3 list-disc list-inside">
        <li>Inserta una imagen de una <strong>"Tarjeta Madre"</strong>.</li>
        <li>Por cada tema de las hojas 3 a la 9, inserta una <strong>Flecha</strong> que apunte a esa pieza.</li>
        <li>Junto a la flecha, escribe solo el <strong>Nombre de la pieza</strong>.</li>
      </ul>
    ),
    isCheckable: true,
  },
  {
    id: 'step4',
    title: '4. Animación Automática',
    icon: <Wand2 className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <p>Para que la hoja sea dinámica, TODOS los objetos (títulos, resúmenes, fotos y flechas) deben moverse solos:</p>
        <ol className="list-decimal list-inside space-y-2 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
            <li>Haz clic en el primer objeto. Ve a la pestaña <strong>Animaciones</strong>.</li>
            <li>Elige una estrella <strong>Verde</strong>.</li>
            <li>A la derecha, en Inicio, selecciona <strong>Después de la anterior</strong>.</li>
        </ol>
        <p className="text-sm text-slate-500 italic">
            Importante: Repite esto con cada elemento para crear una fila donde uno sale tras otro automáticamente.
        </p>
      </div>
    ),
    isCheckable: true,
  },
  {
    id: 'step5',
    title: '5. Programación de Sincronía',
    icon: <Clock className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <ul className="space-y-2 list-disc list-inside">
            <li>Haz clic en la <strong>Hoja 1</strong>. Ve a la pestaña <strong>Transiciones</strong>.</li>
            <li>Desactiva la opción <strong>"Al hacer clic con el mouse"</strong>.</li>
            <li>Activa la opción <strong>"Después de:"</strong> y escribe <code className="bg-slate-200 px-1 rounded text-primary font-mono">00:15.00</code>.</li>
            <li>Haz clic en el botón <strong>Aplicar a todas</strong>.</li>
        </ul>
        <div className="bg-emerald-50 p-3 rounded-lg text-sm text-emerald-800">
            <strong>Nota técnica:</strong> Estos 15 segundos son para que salgan todas tus animaciones y tus compañeros alcancen a leer.
        </div>
      </div>
    ),
    isCheckable: true,
  },
  {
    id: 'step6',
    title: '6. Prueba de Vuelo',
    icon: <Rocket className="w-6 h-6" />,
    content: (
      <div className="flex items-center gap-4">
        <div className="bg-slate-100 p-4 rounded-xl text-center min-w-[100px]">
            <span className="block text-2xl font-bold text-slate-800">F5</span>
            <span className="text-xs text-slate-500">Tecla</span>
        </div>
        <p>Presiona F5 y suelta el mouse. Si el texto es breve y las animaciones están correctas, verás tu catálogo fluir perfectamente.</p>
      </div>
    ),
    isCheckable: true,
  },
  {
      id: 'troubleshooting',
      title: 'Solución de Problemas',
      icon: <Wrench className="w-6 h-6" />,
      content: (
          <div className="grid grid-cols-1 gap-3">
              <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                  <strong className="text-red-700 block mb-1">¿Texto amontonado?</strong>
                  <p className="text-sm text-red-600">Borra palabras. Tu resumen debe ser como un mensaje de texto: corto y directo.</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                  <strong className="text-orange-700 block mb-1">¿Cambia antes de tiempo?</strong>
                  <p className="text-sm text-orange-600">Pusiste muchas animaciones o mucho texto. Resumen más corto o sube el tiempo a 20s.</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <strong className="text-blue-700 block mb-1">¿Objeto no se mueve?</strong>
                  <p className="text-sm text-blue-600">Haz clic en él y verifica que tenga la estrella verde en Animaciones.</p>
              </div>
          </div>
      ),
      isCheckable: false
  }
];