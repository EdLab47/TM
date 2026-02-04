import React, { useState } from 'react';
import { Header } from './components/Header';
import { StepCard } from './components/StepCard';
import { GeminiTutor } from './components/GeminiTutor';
import { GUIDE_STEPS } from './constants';
import { Trophy } from 'lucide-react';

const App: React.FC = () => {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  const toggleStep = (id: string) => {
    setCompletedSteps(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const checkableStepsCount = GUIDE_STEPS.filter(s => s.isCheckable).length;
  const progress = Math.round((completedSteps.size / checkableStepsCount) * 100);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
        
        <Header />

        {/* Progress Bar */}
        <div className="sticky top-4 z-40 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-4 mb-8 shadow-sm flex items-center gap-4 transition-all">
          <div className="flex-1">
            <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              <span>Progreso del Proyecto</span>
              <span>{progress}%</span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-emerald-400 transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          {progress === 100 && (
            <div className="hidden sm:flex items-center gap-2 text-emerald-600 animate-in zoom-in spin-in-3 duration-500">
              <Trophy className="w-6 h-6" />
              <span className="font-bold">¡Completado!</span>
            </div>
          )}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {GUIDE_STEPS.map((step, index) => (
            <div 
                key={step.id} 
                className={step.id === 'objective' || step.id === 'step2' || step.id === 'troubleshooting' ? 'lg:col-span-2' : ''}
            >
              <StepCard 
                step={step} 
                completed={completedSteps.has(step.id)} 
                onToggle={toggleStep}
              />
            </div>
          ))}
        </div>

        <footer className="mt-16 text-center border-t border-slate-200 py-8">
          <p className="text-slate-400 font-medium">Diseño Pedagógico para Aula Digital • 2026</p>
        </footer>
      </div>

      <GeminiTutor />
    </div>
  );
};

export default App;
