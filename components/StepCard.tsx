import React from 'react';
import { GuideStep } from '../types';
import { CheckCircle2, Circle } from 'lucide-react';

interface StepCardProps {
  step: GuideStep;
  completed: boolean;
  onToggle: (id: string) => void;
}

export const StepCard: React.FC<StepCardProps> = ({ step, completed, onToggle }) => {
  return (
    <div 
      className={`
        relative overflow-hidden rounded-2xl border transition-all duration-300
        ${completed 
          ? 'bg-slate-50 border-emerald-200 shadow-none opacity-80' 
          : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-1 hover:shadow-2xl'
        }
      `}
    >
      {/* Header Background Accent */}
      <div className={`h-2 w-full ${completed ? 'bg-emerald-400' : 'bg-gradient-to-r from-primary to-secondary'}`} />
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl ${completed ? 'bg-emerald-100 text-emerald-600' : 'bg-indigo-50 text-primary'}`}>
              {step.icon}
            </div>
            <h3 className={`text-xl font-bold ${completed ? 'text-slate-500 line-through' : 'text-slate-800'}`}>
              {step.title}
            </h3>
          </div>
          
          {step.isCheckable && (
            <button 
              onClick={() => onToggle(step.id)}
              className="group focus:outline-none"
              title={completed ? "Mark as incomplete" : "Mark as complete"}
            >
              {completed ? (
                <CheckCircle2 className="w-8 h-8 text-emerald-500 transition-transform group-hover:scale-110" />
              ) : (
                <Circle className="w-8 h-8 text-slate-300 transition-colors group-hover:text-primary" />
              )}
            </button>
          )}
        </div>

        <div className={`text-slate-600 leading-relaxed ${completed ? 'opacity-50' : ''}`}>
          {step.content}
        </div>
      </div>
    </div>
  );
};
