import React from 'react';
import { TemplateDefinition } from '../types';

interface VisualCardProps {
  template: TemplateDefinition;
  isSelected: boolean;
  onClick: () => void;
}

export const VisualCard: React.FC<VisualCardProps> = ({ template, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-col items-start p-6 rounded-xl border text-left transition-all duration-200 w-full
        ${isSelected 
          ? 'bg-navy-800 border-orange ring-1 ring-orange shadow-[0_0_15px_rgba(255,103,25,0.3)]' 
          : 'bg-navy-800/50 border-navy-700 hover:border-navy-600 hover:bg-navy-800'
        }
      `}
    >
      <div className={`p-3 rounded-lg mb-4 ${isSelected ? 'bg-orange text-white' : 'bg-navy-700 text-gray-300'}`}>
        {template.icon}
      </div>
      <h3 className="text-lg font-bold font-serif mb-2 text-white">{template.title}</h3>
      <p className="text-sm text-gray-400 mb-3 leading-relaxed">{template.description}</p>
      <p className="text-xs text-gray-500 mt-auto font-mono">
        e.g. {template.example}
      </p>
    </button>
  );
};
